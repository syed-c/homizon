import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/the-greens/al-sedr'] || {
  title: 'Bathroom Deep Cleaning in Al Sedr - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Sedr. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlSedrPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="the-greens"
      areaName="The Greens"
      subarea="al-sedr"
      subareaName="Al Sedr"
    />
  );
}