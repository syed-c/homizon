import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/silicon-oasis/silicon-heights'] || {
  title: 'Appliance Repairs in Silicon Heights - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Silicon Heights. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsSiliconHeightsPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-heights"
      subareaName="Silicon Heights"
    />
  );
}