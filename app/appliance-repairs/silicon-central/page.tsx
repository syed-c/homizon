import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/silicon-central'] || {
  title: 'Appliance Repairs in Silicon Central - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Silicon Central. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsSiliconCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="silicon-central"
      areaName="Silicon Central"
    />
  );
}