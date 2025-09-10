import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { listProvidersFromSupabase, getServiceBySlugFromSupabase, listAreasFromSupabase, getPageContentFromSupabase } from '@/lib/supabase';
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
    const res = await listProvidersFromSupabase();
    const rows: any[] = res.data || [];
    // Build normalization maps for robust matching
    const serviceSlugSet = new Set<string>([String(service.slug).toLowerCase()]);
    const areaSlugSet = new Set<string>([String(area.slug).toLowerCase()]);
    if (service.name) serviceSlugSet.add(String(service.name).toLowerCase());
    if (area.name) areaSlugSet.add(String(area.name).toLowerCase());

    const toArray = (val: any): any[] => {
      if (Array.isArray(val)) return val;
      if (typeof val === 'string') {
        try {
          const parsed = JSON.parse(val);
          if (Array.isArray(parsed)) return parsed;
        } catch {}
        return val.split(',').map(s => s.trim()).filter(Boolean);
      }
      return [];
    };

    const normalize = (vals: any[]): string[] => vals.map(v => String(v).toLowerCase().replace(/\s+/g, '-'));

    providers = rows.filter((p: any) => {
      const pAreas = normalize(toArray(p.areas));
      const pAreaNames = toArray(p.areas).map((v: any) => String(v).toLowerCase());
      const pServices = normalize(toArray(p.services));
      const pServiceNames = toArray(p.services).map((v: any) => String(v).toLowerCase());

      const areaMatch = pAreas.some(a => areaSlugSet.has(a)) || pAreaNames.some(a => areaSlugSet.has(a));
      const serviceMatch = pServices.some(s => serviceSlugSet.has(s)) || pServiceNames.some(s => serviceSlugSet.has(s));
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


