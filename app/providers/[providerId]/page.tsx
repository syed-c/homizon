import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { sampleProviders, services, areas, type Provider } from '@/lib/data';
import ProviderProfileClient from './provider-profile-client';

type PageProps = {
  params: Promise<{ providerId: string }>;
};

export async function generateStaticParams() {
  return sampleProviders.map(p => ({ providerId: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { providerId } = await params;
  const provider = sampleProviders.find(p => p.id === providerId);
  if (!provider) return { title: 'Provider Not Found - HOMIZON' };
  return {
    title: `${provider.name} – ${provider.company || 'Service Provider'} | HOMIZON`,
    description: provider.description,
    alternates: { canonical: `https://homizon.com/providers/${provider.id}` }
  };
}

export default async function ProviderProfilePage({ params }: PageProps) {
  const { providerId } = await params;
  const provider = sampleProviders.find(p => p.id === providerId);
  if (!provider) return notFound();

  const providerServices = services.filter(s => provider.services.includes(s.slug));
  const providerAreas = areas.filter(a => provider.areas.includes(a.slug));

  return (
    <ProviderProfileClient 
      provider={provider as Provider}
      services={providerServices}
      areas={providerAreas}
    />
  );
}


