import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/jumeirah/jumeirah-3'] || {
  title: 'Appliance Repairs in Jumeirah 3 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Jumeirah 3. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsJumeirah3Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="jumeirah-3"
      subareaName="Jumeirah 3"
    />
  );
}