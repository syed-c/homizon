import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-hills-estate/golf-suites'] || {
  title: 'Carpet Cleaning in Golf Suites - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Golf Suites. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningGolfSuitesPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
      subarea="golf-suites"
      subareaName="Golf Suites"
    />
  );
}