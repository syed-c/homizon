import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-hills-estate'] || {
  title: 'Bathroom Plumbing in Dubai Hills Estate - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Dubai Hills Estate. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingDubaiHillsEstatePage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
    />
  );
}