import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { listProvidersFromSupabase, getServiceBySlugFromSupabase, listAreasFromSupabase, getPageContentFromSupabase, listServicesFromSupabase } from '@/lib/supabase';
import ServiceAreaClient from './service-client';

interface AreaServicePageProps {
  params: Promise<{
    area: string;
    service: string;
  }>;
}

export async function generateMetadata({ params }: AreaServicePageProps): Promise<Metadata> {
  const { service: serviceSlug, area: areaSlug } = await params;
  const serviceRes = await getServiceBySlugFromSupabase(serviceSlug);
  let area: any = null;
  try {
    const res = await listAreasFromSupabase();
    const rows: any[] = res.data || [];
    area = rows.find(a => a.slug === areaSlug && a.status === 'active') || null;
  } catch {}
  const service = serviceRes.data && serviceRes.data.status === 'active' ? serviceRes.data : null;
  if (!service || !area) {
    return { title: 'Not Found', description: 'The requested page could not be found.' };
  }
  // Try CMS for meta overrides
  try {
    const cms = await getPageContentFromSupabase(`areas/${area.slug}/${service.slug}`);
    const content: any = (cms as any)?.data?.content || {};
    const mt = (cms as any)?.data?.meta_title || `${service.name} in ${area.name}`;
    const md = (cms as any)?.data?.meta_description || `${service.name} providers in ${area.name}`;
    return {
      title: mt,
      description: md,
      openGraph: { title: mt, description: md },
      twitter: { card: 'summary_large_image', title: mt, description: md }
    };
  } catch {
    return {
      title: `${service.name} in ${area.name}`,
      description: `${service.name} providers in ${area.name}`,
      openGraph: { title: `${service.name} in ${area.name}`, description: `${service.name} providers in ${area.name}` },
      twitter: { card: 'summary_large_image', title: `${service.name} in ${area.name}`, description: `${service.name} providers in ${area.name}` }
    };
  }
}

export default async function AreaServicePage({ params }: AreaServicePageProps) {
  const { service: serviceSlug, area: areaSlug } = await params;
  const serviceRes = await getServiceBySlugFromSupabase(serviceSlug);
  let area: any = null;
  try {
    const res = await listAreasFromSupabase();
    const rows: any[] = res.data || [];
    area = rows.find(a => a.slug === areaSlug && a.status === 'active') || null;
  } catch {}
  const service = serviceRes.data && serviceRes.data.status === 'active' ? serviceRes.data : null;
  if (!service || !area) {
    notFound();
  }
  let providers: any[] = [];
  let cmsContent: any = null;
  try {
    const [provRes, svcRes, areasRes] = await Promise.all([
      listProvidersFromSupabase(),
      listServicesFromSupabase(),
      listAreasFromSupabase()
    ]);
    const rows: any[] = provRes.data || [];
    const svcRows: any[] = (svcRes.data || []).filter((s: any) => s.status === 'active');
    const areaRows: any[] = (areasRes.data || []).filter((a: any) => a.status === 'active');
    const idToSlug: Record<string,string> = {};
    const nameToSlug: Record<string,string> = {};
    svcRows.forEach((s: any) => {
      idToSlug[String(s.id)] = String(s.slug).toLowerCase();
      nameToSlug[String(s.name).toLowerCase()] = String(s.slug).toLowerCase();
    });
    const areaIdToSlug: Record<string,string> = {};
    const areaNameToSlug: Record<string,string> = {};
    areaRows.forEach((a: any) => {
      areaIdToSlug[String(a.id)] = String(a.slug).toLowerCase();
      areaNameToSlug[String(a.name).toLowerCase()] = String(a.slug).toLowerCase();
    });
    // Build normalization maps for robust matching
    const serviceSlugSet = new Set<string>([String(service.slug).toLowerCase()]);
    const areaSlugSet = new Set<string>([String(area.slug).toLowerCase()]);
    if (service.name) serviceSlugSet.add(String(service.name).toLowerCase());
    if (area.name) areaSlugSet.add(String(area.name).toLowerCase());

    const toArray = (val: any): any[] => {
      if (Array.isArray(val)) return val;
      if (typeof val === 'string') {
        const t = val.trim();
        // Postgres array literal {"a","b"}
        if (t.startsWith('{') && t.endsWith('}')) {
          const inner = t.slice(1, -1);
          return inner.split(',').map(s => s.replace(/^"|"$/g,'').trim());
        }
        try {
          const parsed = JSON.parse(t);
          if (Array.isArray(parsed)) return parsed;
        } catch {}
        return t.split(',').map(s => s.trim()).filter(Boolean);
      }
      return [];
    };

    const normalize = (vals: any[]): string[] => vals.map(v => String(v).toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,''));

    providers = rows.filter((p: any) => {
      const pAreas = normalize(toArray(p.areas));
      let pServices = normalize(toArray(p.services));
      // Aliases across services
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
      pServices = pServices.map(alias).map(s => nameToSlug[s] || idToSlug[s] || s);
      const blob = JSON.stringify(p).toLowerCase();
      const servesAllAreas = pAreas.length === 0 || /all\s*areas|any\s*area|dubai/.test(blob);
      // If provider implies all services, expand to all active services for matching
      const servesAllServices = pServices.length === 0 || /all\s*services|any\s*service|full\s*service/.test(blob);
      if (servesAllServices) {
        pServices = Array.from(serviceSlugSet);
      }
      // Map area tokens via id/name when possible
      const mappedAreas = pAreas.map(a => areaIdToSlug[a] || areaNameToSlug[a] || a);
      // Citywide coverage: if a provider didn't list areas, treat as available citywide.
      const areaMatch = servesAllAreas || (mappedAreas.length === 0 ? true : mappedAreas.some(a => areaSlugSet.has(a)));
      const serviceMatch = pServices.some(s => serviceSlugSet.has(s));
      return areaMatch && serviceMatch;
    });
  } catch {
    providers = [];
  }
  try {
    const cms = await getPageContentFromSupabase(`areas/${area.slug}/${service.slug}`);
    cmsContent = (cms as any)?.data?.content || null;
  } catch {}
  return (
    <ServiceAreaClient service={service as any} area={area as any} providers={providers as any} cms={cmsContent} />
  );
}


