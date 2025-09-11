"use client";

import { 
  Home as HomeIcon, Phone, Mail, MapPin, MessageSquare,
  Facebook, Twitter, Instagram, Linkedin, ExternalLink,
  Star, Users, Shield, Clock, ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { useSettings } from '@/lib/settings-context';
import { getPageContentFromSupabase } from '@/lib/supabase';
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { settings } = useSettings();
  const [columns, setColumns] = React.useState<Array<{ title: string; links: Array<{ label: string; url: string }> }>>([
    { title: 'Popular Services', links: [] },
    { title: 'Service Areas', links: [] },
    { title: 'Company & Support', links: [
      { label: 'About Us', url: '/about' },
      { label: 'How It Works', url: '/how-it-works' },
      { label: 'Contact Us', url: '/contact' },
      { label: 'FAQ', url: '/faq' },
      { label: 'Find Providers', url: '/providers' },
      { label: 'Sitemap', url: '/sitemap' }
    ] }
  ]);
  const [tagline, setTagline] = React.useState<string>('');
  const [infoList, setInfoList] = React.useState<Array<{ type: 'Phone' | 'Email' | 'Address'; label: string; link: string }>>([]);
  const [bottom, setBottom] = React.useState<{ copyright?: string; policies?: Array<{ label: string; url: string }>; tagline?: string }>({});

  React.useEffect(() => {
    const loadFooter = async () => {
      try {
        const res = await getPageContentFromSupabase('footer');
        const content: any = (res as any)?.data?.content;
        if (content?.columns && Array.isArray(content.columns)) setColumns(content.columns);
        if (typeof content?.tagline === 'string') setTagline(content.tagline);
        if (Array.isArray(content?.infoList)) setInfoList(content.infoList);
        if (content?.bottom) setBottom(content.bottom);
      } catch {}
    };
    loadFooter();
  }, []);

  return (
    <>
      {/* Mobile Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-neon-green/20 p-4 z-50 md:hidden">
        <div className="flex items-center justify-around max-w-sm mx-auto">
          <Link href="/book" className="flex flex-col items-center space-y-1 group">
            <div className="w-12 h-12 bg-gradient-to-r from-neon-green to-neon-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6 text-black" />
            </div>
            <span className="text-xs text-white font-medium">Book Now</span>
          </Link>
          
          <a href={`tel:${settings.contact_phone}`} className="flex flex-col items-center space-y-1 group">
            <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-white font-medium">Call</span>
          </a>
          
          <a href={`https://wa.me/${settings.contact_phone.replace(/\D/g, '')}?text=Hi! I need help with home services`} className="flex flex-col items-center space-y-1 group">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-white font-medium">WhatsApp</span>
          </a>
          
          <Link href="/providers" className="flex flex-col items-center space-y-1 group">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-white font-medium">Providers</span>
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-gradient-to-br from-black via-neutral-900 to-black text-white pb-20 md:pb-0" data-macaly="main-footer">
        
        {/* Trust Indicators Bar */}
        <div className="bg-gradient-to-r from-neon-green/5 to-neon-blue/5 border-y border-neon-green/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-green to-neon-blue rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                  <Shield className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Verified Pros</h3>
                <p className="text-xs text-white/60">Background checked</p>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Quick Response</h3>
                <p className="text-xs text-white/60">Within 30 minutes</p>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">Top Rated</h3>
                <p className="text-xs text-white/60">Customer reviewed</p>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">500+ Providers</h3>
                <p className="text-xs text-white/60">Largest network</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-neon-green to-neon-blue rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-lg">H</span>
                </div>
                <span className="text-xl font-bold">
                  <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
                    {settings.site_name}
                  </span>
                </span>
              </div>
              
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                {tagline || settings.site_description}
              </p>
              
              <div className="space-y-3 mb-6">
                {infoList.length === 0 && (
                  <>
                    <div className="flex items-center space-x-3 text-white/60 text-sm">
                      <Phone className="h-4 w-4 text-neon-green flex-shrink-0" />
                      <a href={`tel:${settings.contact_phone}`} className="hover:text-neon-green transition-colors">
                        {settings.contact_phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 text-white/60 text-sm">
                      <Mail className="h-4 w-4 text-neon-blue flex-shrink-0" />
                      <a href={`mailto:${settings.contact_email}`} className="hover:text-neon-blue transition-colors">
                        {settings.contact_email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3 text-white/60 text-sm">
                      <MapPin className="h-4 w-4 text-neon-green flex-shrink-0" />
                      <span>Dubai, UAE</span>
                    </div>
                  </>
                )}
                {infoList.map((info, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-white/60 text-sm">
                    {info.type === 'Phone' && <Phone className="h-4 w-4 text-neon-green flex-shrink-0" />}
                    {info.type === 'Email' && <Mail className="h-4 w-4 text-neon-blue flex-shrink-0" />}
                    {info.type === 'Address' && <MapPin className="h-4 w-4 text-neon-green flex-shrink-0" />}
                    {info.link ? (
                      <a href={info.link} className="hover:text-neon-green transition-colors">{info.label || info.link}</a>
                    ) : (
                      <span>{info.label}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  href="/book" 
                  className="bg-gradient-to-r from-neon-green to-neon-blue text-black font-semibold px-4 py-2 rounded-lg hover:scale-105 transition-transform text-sm text-center"
                >
                  Book Service
                </Link>
                <Link 
                  href="/providers/register" 
                  className="border border-neon-green text-neon-green font-semibold px-4 py-2 rounded-lg hover:bg-neon-green/10 transition-colors text-sm text-center"
                >
                  Join as Provider
                </Link>
              </div>
            </div>

            {columns.map((col, ci) => (
              <div key={`${col.title}-${ci}`}>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <span className="w-1 h-6 bg-gradient-to-b from-neon-green to-neon-blue rounded-full mr-3"></span>
                  {col.title}
                </h3>
                <ul className="space-y-2">
                  {col.links.map((lnk, li) => (
                    <li key={`${lnk.label}-${li}`}>
                      <Link href={lnk.url} className="flex items-center text-white/60 hover:text-neon-green transition-colors text-sm group">
                        <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {lnk.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-white/60">
                <p>{bottom?.copyright || `© ${currentYear} ${settings.site_name}. All rights reserved.`}</p>
                <div className="flex items-center space-x-4">
                  {(bottom?.policies || [
                    { label: 'Privacy Policy', url: '/privacy' },
                    { label: 'Terms of Service', url: '/terms' }
                  ]).map((p, i) => (
                    <span key={`${p.label}-${p.url}-${i}`} className="flex items-center space-x-0">
                      {i>0 && <span className="text-white/30">•</span>}
                      <Link href={p.url} className="hover:text-neon-green transition-colors ml-0.5">{p.label}</Link>
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {(bottom?.tagline || 'Dubai\'s #1 Service Platform') && (
                  <div className="bg-gradient-to-r from-neon-green/20 to-neon-blue/20 border border-neon-green/30 px-4 py-2 rounded-full">
                    <span className="text-white/90 text-sm font-medium">{bottom?.tagline || "Dubai's #1 Service Platform"}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}