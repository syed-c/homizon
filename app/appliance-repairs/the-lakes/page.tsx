import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/the-lakes'] || {
  title: 'Appliance Repairs in The Lakes - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in The Lakes. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsTheLakesPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="the-lakes"
      areaName="The Lakes"
    />
  );
}