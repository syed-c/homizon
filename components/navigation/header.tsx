"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown, Phone, MapPin, User, Menu, X, Search, UserCheck, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Bell, Settings, LogOut } from 'lucide-react';
import { useSettings } from '@/lib/settings-context';
import { getPageContentFromSupabase } from '@/lib/supabase';

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
  const pathname = usePathname();
  const isProviderRoute = pathname?.startsWith('/provider/');

  // CMS-driven header config
  const [menus, setMenus] = useState<Array<{ label: string; url: string; children?: Array<{ label: string; url: string }> }>>([
    { label: 'Home', url: '/' },
    { label: 'Services', url: '/services', children: headerServiceCategories.map(c => ({ label: c.name, url: `/services/${c.slug}` })) },
    { label: 'Areas', url: '/areas', children: headerAreas.map(a => ({ label: a.name, url: `/areas/${a.slug}` })) },
    { label: 'How It Works', url: '/how-it-works' },
    { label: 'About', url: '/about' }
  ]);
  const [ctas, setCtas] = useState<Array<{ label: string; url: string; variant?: 'primary' | 'secondary' | 'outline' }>>([
    { label: 'Browse Providers', url: '/providers', variant: 'outline' },
    { label: 'Find Services', url: '/providers', variant: 'primary' }
  ]);

  useEffect(() => {
    const loadHeader = async () => {
      try {
        const res = await getPageContentFromSupabase('header');
        const content: any = (res as any)?.data?.content;
        if (content?.menus && Array.isArray(content.menus)) setMenus(content.menus);
        if (content?.ctas && Array.isArray(content.ctas)) setCtas(content.ctas);
      } catch {}
    };
    loadHeader();
  }, []);

  const handleLogout = () => {
    try {
      localStorage.removeItem('provider');
      window.location.href = '/login';
    } catch {}
  };

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
            {menus.map((m, idx) => (
              <div key={`${m.label}-${idx}`} className={m.children?.length ? 'relative group' : ''}>
                {m.children?.length ? (
                  <>
                    <button className="text-white/80 hover:text-neon-blue transition-colors flex items-center">
                      {m.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 min-w-[14rem] bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="p-4 grid grid-cols-1 gap-2">
                        {m.children.map((c, ci) => (
                          <Link key={`${c.label}-${ci}`} href={c.url} className="flex items-center p-2 rounded-lg hover:bg-white/10 transition-colors">
                            <span className="text-white/80">{c.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link href={m.url} className="text-white/80 hover:text-neon-blue transition-colors">{m.label}</Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons or Provider Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-white/80 text-sm">
              <Phone className="h-4 w-4" />
              <span>{settings.contact_phone}</span>
            </div>
            {!isProviderRoute && (
              <>
                {ctas.map((b, i) => (
                  <Link key={`${b.label}-${i}`} href={b.url}>
                    <Button
                      variant={b.variant === 'outline' ? 'outline' : undefined}
                      className={
                        b.variant === 'outline'
                          ? 'hidden md:flex border-neon-green/50 text-neon-green hover:bg-neon-green/10 transition-all duration-300'
                          : b.variant === 'secondary'
                          ? 'hidden md:flex border border-white/20 text-white hover:bg-white/10 transition-all duration-300'
                          : 'bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black font-semibold transition-all duration-300'
                      }
                    >
                      {b.label}
                    </Button>
                  </Link>
                ))}
              </>
            )}
            {isProviderRoute && (
              <div className="hidden md:flex items-center space-x-2">
                <Button variant="outline" size="icon" className="text-white border-white/20 hover:bg-white/10">
                  <Bell className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="text-white border-white/20 hover:bg-white/10">
                  <Settings className="h-5 w-5" />
                </Button>
                <Button variant="outline" onClick={handleLogout} className="text-white border-white/20 hover:bg-white/10">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            )}

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
                    {(menus.find(m => m.label.toLowerCase().includes('service'))?.children || []).slice(0,6).map((c,ci) => (
                      <Link key={`${c.label}-${ci}`} href={c.url} className="text-white/60 hover:text-neon-blue transition-colors py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                        {c.label}
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
                    {(menus.find(m => m.label.toLowerCase().includes('area'))?.children || []).slice(0,8).map((c,ci) => (
                      <Link key={`${c.label}-${ci}`} href={c.url} className="text-white/60 hover:text-neon-green transition-colors py-1 text-sm" onClick={() => setIsMenuOpen(false)}>
                        {c.label}
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