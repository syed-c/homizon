import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/silicon-oasis'] || {
  title: 'Appliance Repairs in Silicon Oasis - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Silicon Oasis. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsSiliconOasisPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="silicon-oasis"
      areaName="Silicon Oasis"
    />
  );
}