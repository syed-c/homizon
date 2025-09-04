import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/the-greens/al-sedr'] || {
  title: 'Carpet Cleaning in Al Sedr - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Sedr. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlSedrPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="the-greens"
      areaName="The Greens"
      subarea="al-sedr"
      subareaName="Al Sedr"
    />
  );
}