import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-hills-estate/golf-suites'] || {
  title: 'AC Servicing in Golf Suites - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Golf Suites. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingGolfSuitesPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
      subarea="golf-suites"
      subareaName="Golf Suites"
    />
  );
}