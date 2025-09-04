import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-festival-city/marsa-plaza'] || {
  title: 'Cleaning Services in Marsa Plaza - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Marsa Plaza. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesMarsaPlazaPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="marsa-plaza"
      subareaName="Marsa Plaza"
    />
  );
}