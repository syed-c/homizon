import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-festival-city/marsa-plaza'] || {
  title: 'Carpet Cleaning in Marsa Plaza - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Marsa Plaza. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningMarsaPlazaPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="marsa-plaza"
      subareaName="Marsa Plaza"
    />
  );
}