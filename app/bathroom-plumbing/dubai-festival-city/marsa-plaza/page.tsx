import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-festival-city/marsa-plaza'] || {
  title: 'Bathroom Plumbing in Marsa Plaza - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Marsa Plaza. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingMarsaPlazaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="marsa-plaza"
      subareaName="Marsa Plaza"
    />
  );
}