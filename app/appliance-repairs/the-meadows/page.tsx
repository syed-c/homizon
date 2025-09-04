import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/the-meadows'] || {
  title: 'Appliance Repairs in The Meadows - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in The Meadows. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsTheMeadowsPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="the-meadows"
      areaName="The Meadows"
    />
  );
}