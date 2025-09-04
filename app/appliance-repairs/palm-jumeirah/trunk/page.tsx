import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/palm-jumeirah/trunk'] || {
  title: 'Appliance Repairs in Trunk - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Trunk. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsTrunkPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="trunk"
      subareaName="Trunk"
    />
  );
}