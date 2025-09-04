import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-festival-city/marsa-plaza'] || {
  title: 'Bathroom Deep Cleaning in Marsa Plaza - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Marsa Plaza. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningMarsaPlazaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="marsa-plaza"
      subareaName="Marsa Plaza"
    />
  );
}