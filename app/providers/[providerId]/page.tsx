import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services, areas, type Provider } from '@/lib/data';
import { getProviderByIdFromSupabase } from '@/lib/supabase';
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

  const providerServices = services.filter(s => (supaProvider.services || []).includes(s.slug));
  const providerAreas = areas.filter(a => (supaProvider.areas || []).includes(a.slug));

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


