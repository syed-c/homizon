"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { areas } from '@/lib/data';

interface InteractiveAreasMapProps {
  service?: string;
  onAreaSelect?: (area: any) => void;
  className?: string;
}

export default function InteractiveAreasMap({ service, onAreaSelect, className = "" }: InteractiveAreasMapProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  // Group areas by sector
  const areasBySector = areas.reduce((acc, area) => {
    const sector = area.sector || 'Other';
    if (!acc[sector]) acc[sector] = [];
    acc[sector].push(area);
    return acc;
  }, {} as Record<string, typeof areas>);

  // Filter areas based on search
  const filteredAreas = areas.filter(area => 
    area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    area.sector?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Define sector colors and positions for map-like layout
  const sectorConfig = {
    'East Dubai': { color: 'from-blue-500 to-blue-600', position: { top: '20%', right: '10%' } },
    'West Dubai': { color: 'from-green-500 to-green-600', position: { top: '30%', left: '10%' } },
    'Central Dubai': { color: 'from-purple-500 to-purple-600', position: { top: '25%', left: '45%' } },
    'South Dubai': { color: 'from-orange-500 to-orange-600', position: { bottom: '20%', left: '30%' } },
    'Deira': { color: 'from-red-500 to-red-600', position: { top: '15%', right: '25%' } }
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neon-blue h-5 w-5" />
          <Input
            placeholder="Search areas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-12 bg-black/50 border-neon-blue/50 text-white placeholder-white/60 rounded-xl focus:border-neon-blue focus:ring-neon-blue/50"
          />
        </div>
      </div>

      {/* Interactive Map Layout */}
      <div className="relative bg-gradient-to-br from-black/40 via-charcoal-900/40 to-black/40 rounded-3xl p-8 border border-neon-blue/30 backdrop-blur-lg" style={{ minHeight: '500px' }}>
        {/* Dubai Map Background */}
        <div className="absolute inset-4 bg-gradient-to-br from-charcoal-800/20 to-black/20 rounded-2xl">
          <div className="absolute top-4 left-4 text-white/40 text-sm font-medium">Dubai Service Areas</div>
          
          {/* Sector Clusters */}
          {Object.entries(sectorConfig).map(([sector, config]) => {
            const sectorAreas = areasBySector[sector] || [];
            const visibleAreas = searchTerm 
              ? sectorAreas.filter(area => 
                  area.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
              : sectorAreas.slice(0, 6); // Show max 6 areas per sector initially

            if (visibleAreas.length === 0) return null;

            return (
              <motion.div
                key={sector}
                className="absolute"
                style={config.position}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div 
                  className="relative cursor-pointer"
                  onMouseEnter={() => setSelectedSector(sector)}
                  onMouseLeave={() => setSelectedSector(null)}
                >
                  {/* Sector Hub */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${config.color} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Sector Label */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium whitespace-nowrap">
                    {sector}
                  </div>

                  {/* Areas Popup */}
                  {selectedSector === sector && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-24 left-1/2 transform -translate-x-1/2 z-10"
                      style={{ minWidth: '280px' }}
                    >
                      <Card className="bg-black/90 backdrop-blur-sm border border-white/20">
                        <CardContent className="p-4">
                          <h3 className="text-white font-semibold mb-3">{sector}</h3>
                          <div className="space-y-2 max-h-64 overflow-y-auto">
                            {visibleAreas.map((area) => (
                              <Link
                                key={area.id}
                                href={service ? `/${service}/${area.slug}` : `/areas/${area.slug}`}
                                className="block"
                              >
                                <div 
                                  className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                                  onMouseEnter={() => setHoveredArea(area.slug)}
                                  onMouseLeave={() => setHoveredArea(null)}
                                >
                                  <div className="flex items-center space-x-2">
                                    <MapPin className="h-4 w-4 text-neon-blue" />
                                    <span className="text-white text-sm">{area.name}</span>
                                  </div>
                                  <div className="flex items-center space-x-1 text-xs text-white/60">
                                    <span>{area.subAreas.length} areas</span>
                                    <ArrowRight className="h-3 w-3" />
                                  </div>
                                </div>
                              </Link>
                            ))}
                            
                            {sectorAreas.length > 6 && !searchTerm && (
                              <div className="text-center pt-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-neon-blue border-neon-blue/50 hover:bg-neon-blue/10 text-xs"
                                  onClick={() => setSearchTerm(sector.toLowerCase())}
                                >
                                  View All {sectorAreas.length} Areas
                                </Button>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* Search Results Overlay */}
          {searchTerm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-4 bg-black/80 rounded-2xl p-6 overflow-y-auto"
            >
              <h3 className="text-white font-semibold mb-4">
                Search Results for "{searchTerm}" ({filteredAreas.length} found)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredAreas.map((area) => (
                  <Link
                    key={area.id}
                    href={service ? `/${service}/${area.slug}` : `/areas/${area.slug}`}
                  >
                    <Card className="bg-white/5 border border-white/10 hover:border-neon-blue/50 transition-all duration-300 cursor-pointer group">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 bg-gradient-to-r ${sectorConfig[area.sector || 'Other']?.color || 'from-gray-500 to-gray-600'} rounded-lg flex items-center justify-center`}>
                            <MapPin className="h-4 w-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-medium group-hover:text-neon-blue transition-colors">
                              {area.name}
                            </h4>
                            <p className="text-white/60 text-xs">
                              {area.sector} • {area.subAreas.length} sub-areas
                            </p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-neon-blue transition-colors" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-black/60 rounded-lg p-3 backdrop-blur-sm">
          <div className="text-white/80 text-xs font-medium mb-2">Areas by Sector</div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(sectorConfig).map(([sector, config]) => (
              <div key={sector} className="flex items-center space-x-1">
                <div className={`w-3 h-3 bg-gradient-to-r ${config.color} rounded-full`}></div>
                <span className="text-white/60 text-xs">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access Popular Areas */}
      <div className="mt-8">
        <h3 className="text-white font-semibold mb-4 text-center">Popular Areas</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {areas.slice(0, 8).map((area) => (
            <Link
              key={area.id}
              href={service ? `/${service}/${area.slug}` : `/areas/${area.slug}`}
            >
              <Button
                variant="outline"
                size="sm"
                className="text-white border-white/20 hover:bg-white/10 hover:border-neon-blue/50 transition-all duration-300"
              >
                <MapPin className="h-3 w-3 mr-1" />
                {area.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}