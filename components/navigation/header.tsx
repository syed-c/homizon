"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown, Phone, MapPin, User, Menu, X, Search, UserCheck, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSettings } from '@/lib/settings-context';

// Lightweight data for header - only what's needed
const headerServiceCategories = [
  { id: 'ac-repair-cleaning', name: 'AC Repair & Cleaning', slug: 'ac-repair-cleaning', services: 3 },
  { id: 'appliance-repair', name: 'Appliance Repair', slug: 'appliance-repair', services: 6 },
  { id: 'deep-cleaning', name: 'Deep Cleaning', slug: 'deep-cleaning', services: 6 },
  { id: 'pest-control', name: 'Pest Control', slug: 'pest-control', services: 6 },
  { id: 'plumbing', name: 'Plumbing Services', slug: 'plumbing', services: 4 },
  { id: 'electrician', name: 'Electrician', slug: 'electrician', services: 3 },
  { id: 'handyman', name: 'Handyman', slug: 'handyman', services: 5 },
  { id: 'laundry', name: 'Laundry & Dry Cleaning', slug: 'laundry', services: 3 }
];

const headerAreas = [
  { id: 'dubai-marina', name: 'Dubai Marina', slug: 'dubai-marina', subAreas: 5 },
  { id: 'downtown-dubai', name: 'Downtown Dubai', slug: 'downtown-dubai', subAreas: 5 },
  { id: 'jbr', name: 'JBR', slug: 'jbr', subAreas: 5 },
  { id: 'business-bay', name: 'Business Bay', slug: 'business-bay', subAreas: 5 },
  { id: 'jumeirah', name: 'Jumeirah', slug: 'jumeirah', subAreas: 7 },
  { id: 'palm-jumeirah', name: 'Palm Jumeirah', slug: 'palm-jumeirah', subAreas: 5 },
  { id: 'jlt', name: 'JLT', slug: 'jlt', subAreas: 5 },
  { id: 'al-barsha', name: 'Al Barsha', slug: 'al-barsha', subAreas: 5 },
  { id: 'deira', name: 'Deira', slug: 'deira', subAreas: 5 },
  { id: 'al-quoz', name: 'Al Quoz', slug: 'al-quoz', subAreas: 4 },
  { id: 'motor-city', name: 'Motor City', slug: 'motor-city', subAreas: 3 },
  { id: 'discovery-gardens', name: 'Discovery Gardens', slug: 'discovery-gardens', subAreas: 3 }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const { settings } = useSettings();

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setDropdownTimeout(timeout);
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-black/95 backdrop-blur-md border-b border-neon-blue/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-green rounded-xl flex items-center justify-center shadow-neon">
              <span className="text-black font-bold text-lg">H</span>
            </div>
            <div>
              <span className="text-xl font-bold text-white">{settings.site_name}</span>
              <div className="text-xs text-neon-blue font-medium">Connect • Book • Trust</div>
            </div>
          </Link>

          {/* Main Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white/80 hover:text-neon-blue transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-white/80 hover:text-neon-blue transition-colors flex items-center">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-neon-blue/30 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-6">
                  <h3 className="text-neon-blue font-semibold mb-4">Service Categories</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {headerServiceCategories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/services/${category.slug}`}
                        className="flex items-center p-2 rounded-lg hover:bg-neon-blue/10 transition-colors group/item"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-green rounded-lg flex items-center justify-center mr-3">
                          <span className="text-xs font-bold text-black">{category.name.charAt(0)}</span>
                        </div>
                        <div>
                          <div className="text-white font-medium group-hover/item:text-neon-blue transition-colors">
                            {category.name}
                          </div>
                          <div className="text-white/60 text-xs">{category.services} services</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <Link href="/services" className="text-neon-green hover:text-neon-green/80 text-sm font-medium">
                      View All Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Areas Dropdown */}
            <div className="relative group">
              <button className="text-white/80 hover:text-neon-green transition-colors flex items-center">
                Areas
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-neon-green/30 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-6">
                  <h3 className="text-neon-green font-semibold mb-4">Popular Areas</h3>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {headerAreas.slice(0, 12).map((area) => (
                      <Link
                        key={area.id}
                        href={`/areas/${area.slug}`}
                        className="flex items-center p-2 rounded-lg hover:bg-neon-green/10 transition-colors group/item"
                      >
                        <MapPin className="h-4 w-4 text-neon-green mr-2" />
                        <div>
                          <div className="text-white font-medium group-hover/item:text-neon-green transition-colors text-sm">
                            {area.name}
                          </div>
                          <div className="text-white/60 text-xs">{area.subAreas} sub-areas</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <Link href="/areas" className="text-neon-green hover:text-neon-green/80 text-sm font-medium">
                      View All Areas →
                    </Link>
                    <Link href="/sitemap" className="text-neon-blue hover:text-neon-blue/80 text-sm font-medium">
                      Full Sitemap →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/how-it-works" className="text-white/80 hover:text-neon-blue transition-colors">
              How It Works
            </Link>
            
            <Link href="/about" className="text-white/80 hover:text-neon-blue transition-colors">
              About
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-white/80 text-sm">
              <Phone className="h-4 w-4" />
              <span>{settings.contact_phone}</span>
            </div>
            
            <Link href="/providers">
              <Button 
                variant="outline" 
                className="hidden md:flex border-neon-green/50 text-neon-green hover:bg-neon-green/10 transition-all duration-300"
              >
                Browse Providers
              </Button>
            </Link>
            
            <Link href="/providers">
              <Button className="bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-semibold transition-all duration-300">
                Find Services
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 transition-all duration-300"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-black" />
              ) : (
                <Menu className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 absolute top-full left-0 right-0 z-50 shadow-2xl"
          >
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className="block text-white/80 hover:text-neon-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <button
                  onClick={() => handleDropdownToggle('mobile-services')}
                  className="w-full text-left text-white/80 font-medium py-2 flex items-center justify-between"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-services' && (
                  <div className="grid grid-cols-1 gap-2 pl-4">
                    {headerServiceCategories.slice(0, 6).map((category) => (
                      <Link
                        key={category.id}
                        href={`/services/${category.slug}`}
                        className="text-white/60 hover:text-neon-blue transition-colors py-1 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                    <Link 
                      href="/services" 
                      className="text-neon-green text-sm font-medium py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Mobile Areas */}
              <div className="space-y-2">
                <button
                  onClick={() => handleDropdownToggle('mobile-areas')}
                  className="w-full text-left text-white/80 font-medium py-2 flex items-center justify-between"
                >
                  Areas
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'mobile-areas' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-areas' && (
                  <div className="grid grid-cols-2 gap-2 pl-4">
                    {headerAreas.slice(0, 8).map((area) => (
                      <Link
                        key={area.id}
                        href={`/areas/${area.slug}`}
                        className="text-white/60 hover:text-neon-green transition-colors py-1 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {area.name}
                      </Link>
                    ))}
                    <Link 
                      href="/areas" 
                      className="text-neon-green text-sm font-medium py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      View All Areas →
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                href="/how-it-works" 
                className="block text-white/80 hover:text-neon-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              
              <Link 
                href="/about" 
                className="block text-white/80 hover:text-neon-blue transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              <div className="pt-4 border-t border-white/10">
                <Link href="/providers" className="block w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-semibold">
                    Find Services
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}