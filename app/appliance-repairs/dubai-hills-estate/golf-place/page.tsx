import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-hills-estate/golf-place'] || {
  title: 'Appliance Repairs in Golf Place - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Golf Place. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsGolfPlacePage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
      subarea="golf-place"
      subareaName="Golf Place"
    />
  );
}