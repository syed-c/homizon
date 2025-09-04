import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-sports-city/golf-horizon'] || {
  title: 'Appliance Repairs in Golf Horizon - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Golf Horizon. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsGolfHorizonPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="golf-horizon"
      subareaName="Golf Horizon"
    />
  );
}