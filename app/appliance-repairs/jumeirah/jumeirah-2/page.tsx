import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/jumeirah/jumeirah-2'] || {
  title: 'Appliance Repairs in Jumeirah 2 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Jumeirah 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsJumeirah2Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="jumeirah-2"
      subareaName="Jumeirah 2"
    />
  );
}