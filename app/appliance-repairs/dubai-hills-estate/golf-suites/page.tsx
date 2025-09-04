import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-hills-estate/golf-suites'] || {
  title: 'Appliance Repairs in Golf Suites - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Golf Suites. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsGolfSuitesPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
      subarea="golf-suites"
      subareaName="Golf Suites"
    />
  );
}