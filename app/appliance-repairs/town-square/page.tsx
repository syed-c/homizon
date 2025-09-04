import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/town-square'] || {
  title: 'Appliance Repairs in Town Square - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Town Square. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsTownSquarePage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="town-square"
      areaName="Town Square"
    />
  );
}