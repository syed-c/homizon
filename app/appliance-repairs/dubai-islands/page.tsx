import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-islands'] || {
  title: 'Appliance Repairs in Dubai Islands - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Dubai Islands. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsDubaiIslandsPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-islands"
      areaName="Dubai Islands"
    />
  );
}