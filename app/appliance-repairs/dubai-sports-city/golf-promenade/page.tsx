import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-sports-city/golf-promenade'] || {
  title: 'Appliance Repairs in Golf Promenade - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Golf Promenade. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsGolfPromenadePage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="golf-promenade"
      subareaName="Golf Promenade"
    />
  );
}