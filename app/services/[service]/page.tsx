import { notFound } from 'next/navigation';
import { getServiceBySlug, sampleProviders, serviceCategories } from '@/lib/data';
import { getServiceBySlugFromSupabase } from '@/lib/supabase';
import { Metadata } from 'next';
import ServicePageClient from './service-page-client';

interface ServicePageProps {
  params: Promise<{
    service: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  
  // Check Supabase for service status first
  let serviceRow: any = null;
  try {
    const res = await getServiceBySlugFromSupabase(serviceSlug);
    serviceRow = res.data;
  } catch {}
  // If Supabase says inactive/deleted, treat as missing
  const service = serviceRow && serviceRow.status === 'active' ? getServiceBySlug(serviceSlug) : getServiceBySlug(serviceSlug);
  
  // If not found, check if it's a category
  const category = serviceCategories.find(cat => cat.slug === serviceSlug);
  
  if ((!serviceRow || serviceRow.status !== 'active') && !category) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.'
    };
  }

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

  // Handle category metadata
  if (category) {
    return {
      title: `${category.name} Dubai | ${category.services.length} Services | ${siteName}`,
      description: `${category.description} Find trusted professionals for ${category.name.toLowerCase()} services in Dubai. Browse verified providers and get instant quotes.`,
      keywords: [
        category.name,
        'Dubai',
        'service providers',
        'professionals',
        'verified',
        'booking',
        'home services',
        ...category.services.map(s => s.name)
      ],
      openGraph: {
        title: `${category.name} Dubai | ${siteName}`,
        description: `${category.description} Find trusted professionals in Dubai.`,
        type: 'website',
        siteName: siteName
      },
      twitter: {
        card: 'summary_large_image',
        title: `${category.name} Dubai | ${siteName}`,
        description: `${category.description} Find trusted professionals in Dubai.`
      }
    };
  }

  // Handle individual service metadata (service is guaranteed to exist here)
  if ((!serviceRow || serviceRow.status !== 'active') && !service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.'
    };
  }

  const providers = sampleProviders.filter(provider => 
    provider.isApproved && provider.services.includes(serviceSlug)
  );

  const averageRating = providers.reduce((sum, p) => sum + p.rating, 0) / providers.length || 0;

  return {
    title: `${service.name} Dubai | ${providers.length} Verified Professionals | ${siteName}`,
    description: `Find trusted ${service.name.toLowerCase()} professionals in Dubai. ${providers.length} verified providers with ${averageRating.toFixed(1)} average rating. Book instantly with same-day service available.`,
    keywords: [
      service.name,
      'Dubai',
      'service provider',
      'professional',
      'verified',
      'booking',
      'home services',
      service.category
    ],
    openGraph: {
      title: `${service.name} Dubai | ${siteName}`,
      description: `Find trusted ${service.name.toLowerCase()} professionals in Dubai. ${providers.length} verified providers available.`,
      type: 'website',
      siteName: siteName
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} Dubai | ${siteName}`,
      description: `Find trusted ${service.name.toLowerCase()} professionals in Dubai. ${providers.length} verified providers available.`
    }
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { service: serviceSlug } = await params;
  
  let serviceRow: any = null;
  try {
    const res = await getServiceBySlugFromSupabase(serviceSlug);
    serviceRow = res.data;
  } catch {}
  const isActive = serviceRow ? serviceRow.status === 'active' : true;
  const service = getServiceBySlug(serviceSlug);
  
  // If not found, check if it's a category
  const category = serviceCategories.find(cat => cat.slug === serviceSlug);
  
  if ((!isActive || !service) && !category) {
    notFound();
  }

  return <ServicePageClient service={service} category={category} />;
}