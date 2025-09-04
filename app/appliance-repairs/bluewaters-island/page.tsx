import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/bluewaters-island'] || {
  title: 'Appliance Repairs in Bluewaters Island - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Bluewaters Island. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsBluewatersIslandPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="bluewaters-island"
      areaName="Bluewaters Island"
    />
  );
}