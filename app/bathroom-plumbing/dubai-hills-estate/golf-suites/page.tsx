import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-hills-estate/golf-suites'] || {
  title: 'Bathroom Plumbing in Golf Suites - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Golf Suites. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingGolfSuitesPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
      subarea="golf-suites"
      subareaName="Golf Suites"
    />
  );
}