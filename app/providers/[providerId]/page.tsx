import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { type Provider } from '@/lib/data';
import { getProviderByIdFromSupabase, listServicesFromSupabase, listAreasFromSupabase } from '@/lib/supabase';
import ProviderProfileClient from './provider-profile-client';

type PageProps = {
  params: Promise<{ providerId: string }>;
};

// No static params because providers are dynamic from Supabase

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { providerId } = await params;
  const { data } = await getProviderByIdFromSupabase(providerId);
  const provider = data as any;
  if (!provider) return { title: 'Provider Not Found - HOMIZON' };
  return {
    title: `${provider.name} – ${provider.company || 'Service Provider'} | HOMIZON`,
    description: provider.description,
    alternates: { canonical: `https://homizon.com/providers/${provider.id}` }
  };
}

export default async function ProviderProfilePage({ params }: PageProps) {
  const { providerId } = await params;
  const { data } = await getProviderByIdFromSupabase(providerId);
  const supaProvider = data as any;
  if (!supaProvider) return notFound();

  // Load active services and areas from Supabase and intersect with provider selections
  const [svcRes, areaRes] = await Promise.all([
    listServicesFromSupabase(),
    listAreasFromSupabase()
  ]);
  const activeServices: any[] = (svcRes.data || []).filter((s: any) => s.status === 'active');
  const activeAreas: any[] = (areaRes.data || []).filter((a: any) => a.status === 'active');
  const normalize = (v: any) => String(v).toLowerCase().replace(/\s+/g, '-');
  const providerServiceTokens = new Set<string>();
  (supaProvider.services || []).forEach((val: any) => {
    const str = String(val);
    providerServiceTokens.add(str);
    providerServiceTokens.add(normalize(str));
  });
  const providerAreaTokens = new Set<string>();
  (supaProvider.areas || []).forEach((val: any) => {
    const str = String(val);
    providerAreaTokens.add(str);
    providerAreaTokens.add(normalize(str));
  });
  const providerServices = activeServices
    .filter((s: any) => providerServiceTokens.has(String(s.slug)) || providerServiceTokens.has(String(s.id)))
    .map((s: any) => ({ slug: s.slug, name: s.name, category: s.category || '' }));
  const providerAreas = activeAreas
    .filter((a: any) => providerAreaTokens.has(String(a.slug)) || providerAreaTokens.has(String(a.id)))
    .map((a: any) => ({ slug: a.slug, name: a.name }));

  return (
    <ProviderProfileClient 
      provider={{
        id: supaProvider.id,
        name: supaProvider.name,
        company: supaProvider.company,
        email: supaProvider.email,
        phone: supaProvider.phone,
        profileImage: supaProvider.profileimage,
        experience: supaProvider.experience || 0,
        rating: supaProvider.rating || 0,
        reviewCount: supaProvider.reviewcount || 0,
        services: supaProvider.services || [],
        areas: supaProvider.areas || [],
        description: supaProvider.description || '',
        certifications: supaProvider.certifications || [],
        languages: supaProvider.languages || [],
        pricing: supaProvider.pricing || {},
        availability: supaProvider.availability || { emergency: false, weekdays: '', weekends: '' },
        isApproved: supaProvider.isapproved,
        isFeatured: !!supaProvider.isfeatured,
        isPremium: !!supaProvider.ispremium,
        joinedDate: supaProvider.joineddate,
        lastActive: supaProvider.lastactive || '',
        completedJobs: supaProvider.completedjobs || 0,
        responseTime: supaProvider.responsetime || ''
      } as Provider}
      services={providerServices}
      areas={providerAreas}
    />
  );
}


