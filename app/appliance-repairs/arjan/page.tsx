import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/arjan'] || {
  title: 'Appliance Repairs in Arjan - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Arjan. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsArjanPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="arjan"
      areaName="Arjan"
    />
  );
}