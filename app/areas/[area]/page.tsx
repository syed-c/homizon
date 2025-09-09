import { notFound } from 'next/navigation';
import { sampleProviders } from '@/lib/data';
import { listAreasFromSupabase } from '@/lib/supabase';
import { Metadata } from 'next';
import AreaPageClient from './area-page-client';

interface AreaPageProps {
  params: Promise<{
    area: string;
  }>;
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { area: areaSlug } = await params;
  let area: any = null;
  try {
    const res = await listAreasFromSupabase();
    const rows: any[] = res.data || [];
    area = rows.find(a => a.slug === areaSlug && a.status === 'active') || null;
  } catch {}
  
  if (!area) {
    return {
      title: 'Area Not Found',
      description: 'The requested area could not be found.'
    };
  }

  const providers = sampleProviders.filter(provider => 
    provider.isApproved && provider.areas.includes(areaSlug)
  );

  const averageRating = providers.reduce((sum, p) => sum + p.rating, 0) / providers.length || 0;
  const emergencyProviders = providers.filter(p => p.availability.emergency).length;

  // Try to get settings from API
  let siteName = 'Homizon';
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/admin/settings`, {
      cache: 'no-store'
    });
    if (response.ok) {
      const settings = await response.json();
      siteName = settings.site_name || 'Homizon';
    }
  } catch (error) {
    console.error('Failed to fetch settings for metadata:', error);
  }

  return {
    title: `Home Services in ${area.name} Dubai | ${providers.length} Verified Providers | ${siteName}`,
    description: `Find trusted home service professionals in ${area.name}, Dubai. ${providers.length} verified providers with ${averageRating.toFixed(1)} average rating. ${emergencyProviders} emergency services available.`,
    keywords: [
      area.name,
      'Dubai',
      'home services',
      'service providers',
      'verified professionals',
      'emergency services',
      'booking',
      'maintenance'
    ],
    openGraph: {
      title: `Home Services in ${area.name} Dubai | ${siteName}`,
      description: `Find trusted home service professionals in ${area.name}, Dubai. ${providers.length} verified providers available.`,
      type: 'website',
      siteName: siteName
    },
    twitter: {
      card: 'summary_large_image',
      title: `Home Services in ${area.name} Dubai | ${siteName}`,
      description: `Find trusted home service professionals in ${area.name}, Dubai. ${providers.length} verified providers available.`
    }
  };
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { area: areaSlug } = await params;
  let area: any = null;
  try {
    const res = await listAreasFromSupabase();
    const rows: any[] = res.data || [];
    area = rows.find(a => a.slug === areaSlug && a.status === 'active') || null;
  } catch {}

  if (!area) {
    notFound();
  }

  return <AreaPageClient area={area} />;
}
