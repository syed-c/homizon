import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/silicon-oasis/silicon-avenue'] || {
  title: 'Appliance Repairs in Silicon Avenue - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Silicon Avenue. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsSiliconAvenuePage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-avenue"
      subareaName="Silicon Avenue"
    />
  );
}