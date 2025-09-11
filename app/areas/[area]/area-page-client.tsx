"use client";

import { useState, useEffect } from 'react';
import { 
  MapPin, Star, Clock, Phone, ArrowRight, Calendar, 
  Shield, Award, Users, CheckCircle, Filter, Search,
  ChevronRight, Zap, MessageSquare, Heart, Share2,
  ThermometerSun, Droplets, Snowflake, Settings, Wind,
  Sparkles, Bug, Wrench, Hammer, Monitor, Paintbrush,
  Info, CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  Service,
  Area
} from '@/lib/data';
import { listProvidersFromSupabase, getPageContentFromSupabase, listAreasFromSupabase, listServicesFromSupabase } from '@/lib/supabase';
import { useSettings } from '@/lib/settings-context';

interface AreaPageClientProps {
  area: Area;
}

export default function AreaPageClient({ area }: AreaPageClientProps) {
  const [sortBy, setSortBy] = useState('rating');
  const [filterBy, setFilterBy] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cms, setCms] = useState<any>(null);
  const [providers, setProviders] = useState<any[]>([]);
  const [serviceCards, setServiceCards] = useState<any[]>([]);
  const { settings } = useSettings();
  const [servicesDb, setServicesDb] = useState<{ id?: string; slug: string; name: string }[]>([]);

  console.log("Area page loaded:", { areaSlug: area.slug });

  // Fetch CMS content from pages_content using slug pattern: areas/{areaSlug}
  useEffect(() => {
    const loadCms = async () => {
      try {
        const res = await getPageContentFromSupabase(`areas/${area.slug}`);
        const content = (res as any)?.data?.content;
        setCms(content || null);
      } catch {}
    };
    loadCms();
  }, [area.slug]);

  // Load services allowed for this area from Supabase (areas.services intersect active services)
  useEffect(() => {
    const loadAreaServices = async () => {
      try {
        const [areasRes, servicesRes] = await Promise.all([
          listAreasFromSupabase(),
          listServicesFromSupabase()
        ]);
        const areaRow: any = (areasRes.data || []).find((a: any) => a.slug === area.slug);
        const activeServices: any[] = (servicesRes.data || []).filter((s: any) => s.status === 'active');
        setServicesDb(activeServices.map((s:any)=>({ id: s.id, slug: s.slug, name: s.name })));
        const allowed: string[] = Array.isArray(areaRow?.services) && areaRow.services.length
          ? areaRow.services
          : activeServices.map((s: any) => s.slug);
        const list = activeServices
          .filter((s: any) => allowed.includes(s.slug))
          .slice(0, 12)
          .map((s: any) => ({ slug: s.slug, name: s.name }));
        setServiceCards(list);
      } catch {
        setServiceCards([]);
      }
    };
    loadAreaServices();
  }, [area.slug]);

  // Load real providers who serve this area from Supabase
  useEffect(() => {
    const loadProviders = async () => {
      try {
        const [provRes, areasRes] = await Promise.all([
          listProvidersFromSupabase(),
          listAreasFromSupabase()
        ]);
        const rows: any[] = provRes.data || [];
        const areasRows: any[] = (areasRes.data || []).filter((a: any) => a.status === 'active');
        const toArray = (val: any): any[] => {
          if (Array.isArray(val)) return val;
          if (typeof val === 'string') {
            const t = val.trim();
            if (t.startsWith('{') && t.endsWith('}')) {
              const inner = t.slice(1, -1);
              return inner.split(',').map(s => s.replace(/^"|"$/g,'').trim());
            }
            try { const parsed = JSON.parse(t); if (Array.isArray(parsed)) return parsed; } catch {}
            return t.split(',').map(s => s.trim()).filter(Boolean);
          }
          return [];
        };
        const normalizeSlug = (v: string) => String(v).toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
        const areaSlugSet = new Set([area.slug, normalizeSlug(area.name)]);
        const areaIdToSlug: Record<string,string> = {}; const areaNameToSlug: Record<string,string> = {};
        areasRows.forEach((a: any) => { areaIdToSlug[String(a.id)] = String(a.slug).toLowerCase(); areaNameToSlug[String(a.name).toLowerCase()] = String(a.slug).toLowerCase(); });
        const filtered = rows.filter((p: any) => {
          const pAreas = toArray(p.areas);
          const asSlugs = pAreas.map((x: any) => {
            const raw = String(x);
            const lower = raw.toLowerCase();
            return areaIdToSlug[raw] || areaNameToSlug[lower] || normalizeSlug(raw);
          });
          // If provider lists no areas or declares all areas, consider it matched
          const blob = JSON.stringify(p).toLowerCase();
          const servesAllAreas = pAreas.length === 0 || /all\s*areas|any\s*area|dubai/.test(blob);
          if (servesAllAreas) return true;
          return asSlugs.some((s: string) => areaSlugSet.has(s));
        });

        setProviders(filtered);
      } catch {
        setProviders([]);
      }
    };
    loadProviders();
  }, [area.slug]);

  // Filter and sort providers
  let filteredProviders = providers.filter((provider: any) => {
    const name = (provider.name || '').toLowerCase();
    const company = (provider.company || '').toLowerCase();
    const description = (provider.description || '').toLowerCase();
    const matchesSearch = name.includes(searchTerm.toLowerCase()) ||
                         company.includes(searchTerm.toLowerCase()) ||
                         description.includes(searchTerm.toLowerCase());
    
    if (filterBy === 'emergency') return matchesSearch && provider.availability.emergency;
    if (filterBy === 'top-rated') return matchesSearch && provider.rating >= 4.5;
    if (filterBy === 'experienced') return matchesSearch && provider.experience >= 5;
    return matchesSearch;
  });

  filteredProviders.sort((a: any, b: any) => {
    if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
    if (sortBy === 'experience') return (b.experience || 0) - (a.experience || 0);
    if (sortBy === 'reviews') return (b.reviewcount || b.reviewCount || 0) - (a.reviewcount || a.reviewCount || 0);
    return 0;
  });

  const averageRating = providers.reduce((sum, p) => sum + (p.rating || 0), 0) / (providers.length || 1);
  const emergencyProviders = providers.filter(p => p.availability?.emergency).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm overflow-x-auto">
            <Link href="/" className="text-white/60 hover:text-white whitespace-nowrap">Home</Link>
            <ChevronRight className="h-4 w-4 text-white/40 flex-shrink-0" />
            <Link href="/areas" className="text-white/60 hover:text-white whitespace-nowrap">Areas</Link>
            <ChevronRight className="h-4 w-4 text-white/40 flex-shrink-0" />
            <span className="text-primary-400 whitespace-nowrap">{area.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-neutral-900 to-accent-900/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span className="text-primary-400 font-medium">Service Area</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                {(() => {
                  const raw = cms?.hero?.h1 || `Home Services in\n${area.name}`;
                  const processed = raw
                    .replace('{ Location }', area.name)
                    .replace('{Location}', area.name)
                    .replace('{ location }', area.name)
                    .replace('{location}', area.name);
                  const parts = processed.split('\n');
                  return (
                    <>
                      <span className="bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">{parts[0]}</span>
                      <br />
                      <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">{parts[1] || ''}</span>
                    </>
                  );
                })()}
              </h1>
              <p className="text-white/70 text-lg md:text-xl mb-6">
                {(() => {
                  const template = cms?.hero?.description || `${area.description} Connect with {providers} verified professionals with an average rating of {rating} stars.`;
                  return template
                    .replace('{providers}', String(providers.length))
                    .replace('{reviews}', averageRating.toFixed(1))
                    .replace('{rating}', averageRating.toFixed(1));
                })()}
              </p>
              <div className="flex flex-wrap gap-6 mb-7">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">{providers.length}</div>
                  <div className="text-white/60 text-sm">Service Providers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-400">25 mins</div>
                  <div className="text-white/60 text-sm">Avg Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">4.9★</div>
                  <div className="text-white/60 text-sm">Customer Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-400">24/7</div>
                  <div className="text-white/60 text-sm">Emergency Service</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={`/book?area=${area.slug}`}>
                  <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-6 py-3 rounded-full font-semibold">
                    Book Service Now
                  </Button>
                </Link>
                <Link href={`tel:${settings.contact_phone}`}>
                  <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-6 py-3 rounded-full font-semibold">
                    Call {settings.contact_phone}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                {/* Hero Image */}
                <img
                  src={cms?.hero?.image_url || 'https://images.pexels.com/photos/261146/pexels-photo-261146.jpeg?auto=compress&cs=tinysrgb&w=1200'}
                  alt={`${area.name} hero`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md border border-white/10">{cms?.hero?.badge || 'Service Area'}</div>
              <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md border border-white/10">{cms?.hero?.eta || '25 mins'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available Section (two-column boxes) */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">{cms?.services?.h2 || 'Services Available in '}{!cms?.services?.h2 && <span className="text-primary-400">{area.name}</span>}</h2>
            <p className="text-white/60">{cms?.services?.paragraph || 'Professional home services delivered by verified experts in your neighborhood'}</p>
          </div>

          {(() => {
            // Normalize provider services to compute counts per service
            const normalizeProviderServices = (p: any): Set<string> => {
              const out = new Set<string>();
              let raw: any = p?.services ?? [];
              if (typeof raw === 'string') raw = raw.split(',').map((x: string) => x.trim()).filter(Boolean);
              if (!Array.isArray(raw)) return out;
              const alias = (token: string) => {
                const k = String(token).toLowerCase();
                if (['ac-repair','ac-cleaning','central-ac','aircon-repair','air-conditioner-repair'].includes(k)) return 'air-conditioner-repair';
                if (['fridge','fridge-repair'].includes(k)) return 'refrigerator-repair';
                if (['gas-cooker-repair'].includes(k)) return 'gas-stove-repair';
                if (['electric-cooker-repair'].includes(k)) return 'electric-stove-repair';
                if (['dish-washer-repair'].includes(k)) return 'dishwasher-repair';
                if (['clothes-washer-repair'].includes(k)) return 'washing-machine-repair';
                return k;
              };
              const idToSlug: Record<string,string> = {}; const nameToSlug: Record<string,string> = {};
              servicesDb.forEach(s=>{ if (s.id) idToSlug[String(s.id)] = String(s.slug).toLowerCase(); nameToSlug[String(s.name).toLowerCase()] = String(s.slug).toLowerCase(); });
              for (const entry of raw) {
                const k = alias(String(entry));
                const mapped = idToSlug[String(entry)] || nameToSlug[k] || k;
                out.add(mapped);
              }
              return out;
            };

            const enhanced = serviceCards.map((svc: any) => {
              const slug = String(svc.slug).toLowerCase();
              const providersForService = providers.filter((p: any) => {
                const set = normalizeProviderServices(p);
                // Global service coverage: if provider lists no specific services, count toward all
                if (set.size === 0) return true;
                return set.has(slug);
              });
              const hasEmergency = providersForService.some((p: any) => p.availability?.emergency);
              return {
                ...svc,
                providersCount: providersForService.length,
                responseTime: providersForService.length > 0 ? '2-4 hours' : '—',
                avgPrice: 'AED —',
                rating: providersForService.length > 0 ? 4.8 : 0,
                urgentAvailable: hasEmergency,
              };
            });

            return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {enhanced.map((service, index) => (
                  <Card key={service.slug} className="bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-primary-500/50 transition-all duration-500 h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-green rounded-xl flex items-center justify-center">
                          <Settings className="h-6 w-6 text-black" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-amber-400 fill-current" />
                          <span className="text-white/80">{service.rating ? service.rating.toFixed(1) : '—'}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl text-white">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-neon-blue" />
                            <span className="text-white/80">{service.providersCount} providers</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-neon-green" />
                            <span className="text-white/80">{service.responseTime}</span>
                          </div>
                        </div>

                        <div>
                          <p className="text-white/60 text-sm mb-2">Available Services:</p>
                          <div className="space-y-1">
                            {/* For now, show the main service name; in future, list sub-services from CMS if provided */}
                            <div className="flex items-center space-x-2">
                              <CheckCircle2 className="h-3 w-3 text-neon-green" />
                              <span className="text-white/80 text-sm">{service.name}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-white/10">
                          <div>
                            <span className="text-neon-blue font-semibold">{service.avgPrice}</span>
                            <span className="text-white/60 text-sm ml-1">starting</span>
                          </div>
                          {service.urgentAvailable && (
                            <div className="flex items-center space-x-1">
                              <Zap className="h-4 w-4 text-red-400" />
                              <span className="text-red-400 text-sm">Urgent Available</span>
                            </div>
                          )}
                        </div>

                        <Link href={`/areas/${area.slug}/${service.slug}`} className="block">
                          <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-green hover:from-neon-blue/80 hover:to-neon-green/80 text-black rounded-xl font-medium">
                            Book {service.name}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* Sub-Areas We Cover */}
      {Array.isArray(cms?.sub_areas?.items) && cms.sub_areas.items.length > 0 && (
        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-white text-xl font-semibold mb-6">{cms.sub_areas.h2 || 'Sub-Areas We Cover'}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cms.sub_areas.items.map((it: any, idx: number) => (
                <Card key={idx} className="bg-white/5 border-white/10">
                  <CardContent className="p-4">
                    <div className="text-white font-medium">{it.title}</div>
                    <div className="text-white/60 text-xs mt-1 flex items-center justify-between">
                      <span>Providers: {it.providers || '—'}</span>
                      <span>Response: {it.response || '—'}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Residents Choose Us */}
      {Array.isArray(cms?.why?.items) && (
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-white text-xl font-semibold mb-6">{cms?.why?.h2 || `Why ${area.name} Residents Choose Us`}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {cms.why.items.map((f: any, i: number) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mx-auto mb-3" />
                  <div className="text-white font-semibold">{f.title}</div>
                  <div className="text-white/60 text-sm mt-1">{f.paragraph}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reviews */}
      {Array.isArray(cms?.reviews?.items) && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-white text-xl font-semibold mb-4">{cms?.reviews?.h2 || 'Recent Customer Reviews'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cms.reviews.items.map((r: any, idx: number) => (
                <Card key={idx} className="bg-white/5 border-white/10">
                  <CardContent className="p-4">
                    <div className="text-white text-sm font-semibold mb-1">{r.name} {r.area ? `• ${r.area}` : ''}</div>
                    <div className="text-amber-400 text-xs mb-2">{r.rating || '★★★★★'}</div>
                    <div className="text-white/70 text-sm">{r.paragraph}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Emergency Banner */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl p-6 border border-red-400/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-white font-semibold mb-1">{cms?.emergency?.h2 || '24/7 Emergency Service in '}{!cms?.emergency?.h2 && <span>{area.name}</span>}</div>
                <div className="text-white/70 text-sm">{cms?.emergency?.paragraph || 'Urgent home service needed? Our emergency response team is available 24/7 with response times as fast as 1 hour.'}</div>
              </div>
              <Link href={`tel:${settings.contact_phone}`}>
                <Button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-6">Emergency Service</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Providers section intentionally removed for locations page. Providers are listed on each location's service page. */}

      {/* Custom Content Section */}
      {(cms?.about?.h2 || cms?.about?.paragraph) && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-gradient-to-r from-primary-900/30 to-accent-900/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <Info className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {cms?.about?.h2 || `About Home Services in ${area.name}`}
                </h2>
                <p className="text-white/60 text-sm">Local insights and expert information</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed">{cms?.about?.paragraph || ''}</p>
            
            <div className="mt-6 flex items-center space-x-4 text-sm text-white/60">
              <div className="flex items-center space-x-1">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>Verified Information</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>Updated {cms?.lastModified || 'recently'}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-purple-400" />
                <span>Curated by {settings.site_name} Team</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">{cms?.faqs?.h2 || 'Frequently Asked Questions'}</h2>
          <p className="text-white/60 text-lg">{cms?.faqs?.paragraph || `Common questions about services in ${area.name}`}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(cms?.faqs?.items || [
            {
              question: `How quickly can I get a service provider in ${area.name}?`,
              answer: `Most service providers in ${area.name} can respond within 30-60 minutes. For emergency services, response time is typically 15-30 minutes.`
            },
            {
              question: `Are service providers available on weekends in ${area.name}?`,
              answer: `Yes, many service providers work weekends in ${area.name}. However, weekend slots fill up quickly, so we recommend booking in advance.`
            },
            {
              question: `What are the typical service charges in ${area.name}?`,
              answer: `Service charges vary by type of service. Basic maintenance starts from AED 100, while specialized services like AC repair can range from AED 150-400.`
            },
            {
              question: `Do service providers in ${area.name} offer warranties?`,
              answer: `Most professional service providers offer warranties ranging from 30 days to 1 year, depending on the type of service and parts used.`
            },
            {
              question: `Is parking available for service providers in ${area.name}?`,
              answer: `${area.name.includes('Marina') ? 'Paid parking is available in designated areas. Many buildings offer visitor parking for service providers.' : area.name.includes('Downtown') ? 'Valet parking and paid parking zones are available. Check with your building management for visitor parking.' : 'Most residential areas have visitor parking available. Commercial areas may require paid parking.'}`
            },
            {
              question: `What safety measures do service providers follow in ${area.name}?`,
              answer: `All verified providers follow safety protocols, carry insurance, and undergo background checks. They also follow building-specific safety guidelines.`
            }
          ]).map((faq: any, index: number) => (
            <div key={index}>
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-colors h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">Q</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                      <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-900/50 to-accent-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              {cms?.cta?.h2 || `Need Home Services in ${area.name}? We're Here to Help!`}
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              {cms?.cta?.paragraph || `Get connected with verified service professionals in ${area.name}. Compare quotes, read reviews, and book your service instantly.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/book?area=${area.slug}`}>
                <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-8 py-3 rounded-full font-semibold">
                  Book Service in {area.name}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href={`tel:${settings.contact_phone}`}>
                <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 px-8 py-3 rounded-full font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Call {settings.contact_phone}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProviderLineItem({ provider, area, index }: { 
  provider: any; 
  area: Area; 
  index: number; 
}) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-500/50 transition-all duration-300 rounded-xl p-4 md:p-6">
      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="flex items-start space-x-3 mb-4">
          {/* Profile Image - Smaller on mobile */}
          <div className="relative flex-shrink-0">
            <img 
              src={provider.profileImage || provider.profileimage || provider.avatar_url || provider.photo_url || 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&h=80&w=80'} 
              alt={provider.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-primary-500/50"
            />
            {provider.availability.emergency && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <Zap className="h-2 w-2 text-white" />
              </div>
            )}
          </div>
          
          {/* Provider Info - Mobile */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-base font-semibold text-white truncate">{provider.name}</h3>
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 text-amber-400 fill-current" />
                <span className="text-white font-medium text-sm">{provider.rating}</span>
              </div>
            </div>
            
            {provider.company && (
              <p className="text-primary-400 text-xs font-medium truncate mb-1">@ {provider.company}</p>
            )}
            
            <div className="flex flex-wrap items-center gap-2 text-xs text-white/60 mb-2">
              <span>{provider.experience} years</span>
              <span>•</span>
              <span>{provider.services.length} services</span>
              <span>•</span>
              <span>({provider.reviewCount} reviews)</span>
            </div>
            
            <p className="text-white/60 text-xs line-clamp-2 mb-3">{provider.description}</p>
            
            {/* Tags - Mobile */}
            <div className="flex flex-wrap items-center gap-1 mb-3">
              <span className="text-xs text-white/70">{provider.languages.join(', ')}</span>
              {provider.availability.emergency && (
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs">
                  24/7 Emergency
                </Badge>
              )}
            </div>
          </div>
        </div>
        
        {/* Availability and Actions - Mobile */}
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="mb-2">
              <div className="text-white/60 text-xs">Available</div>
              <div className="text-white text-sm font-medium">{provider.availability.weekdays}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Link href={`/book?provider=${provider.id}&area=${area.slug}`}>
              <Button size="sm" className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-4 py-2 rounded-lg font-medium text-xs">
                Book Now
              </Button>
            </Link>
            
            <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 rounded-lg p-2">
              <MessageSquare className="h-3 w-3" />
            </Button>
            
            <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10 rounded-lg p-2">
              <Phone className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 flex-1">
            {/* Profile Image */}
            <div className="relative">
              <img 
                src={provider.profileImage || 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&h=80&w=80'} 
                alt={provider.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary-500/50"
              />
              {provider.availability.emergency && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <Zap className="h-2 w-2 text-white" />
                </div>
              )}
            </div>
            
            {/* Provider Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-3 mb-1">
                <h3 className="text-lg font-semibold text-white truncate">{provider.name}</h3>
                {provider.company && (
                  <span className="text-primary-400 text-sm font-medium truncate">@ {provider.company}</span>
                )}
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-amber-400 fill-current" />
                  <span className="text-white font-medium">{provider.rating}</span>
                  <span className="text-white/60 text-sm">({provider.reviewCount})</span>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                <span>{provider.experience} years experience</span>
                <span>•</span>
                <span>{provider.services.length} services</span>
                <span>•</span>
                <span>{provider.languages.join(', ')}</span>
                {provider.availability.emergency && (
                  <>
                    <span>•</span>
                    <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs">
                      24/7 Emergency
                    </Badge>
                  </>
                )}
              </div>
              
              <p className="text-white/60 text-sm mt-2 line-clamp-2">{provider.description}</p>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-3 ml-4">
            <div className="text-right">
              <div className="text-white/60 text-xs">Available</div>
              <div className="text-white text-sm font-medium">{provider.availability.weekdays}</div>
            </div>
            
            <Link href={`/book?provider=${provider.id}&area=${area.slug}`}>
              <Button className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-6 py-2 rounded-xl font-medium">
                Book Now
              </Button>
            </Link>
            {/* Message/Call buttons removed as requested */}
          </div>
        </div>
      </div>
    </div>
  );
}
