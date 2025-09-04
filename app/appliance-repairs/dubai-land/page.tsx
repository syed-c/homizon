import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-land'] || {
  title: 'Appliance Repairs in Dubai Land - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Dubai Land. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsDubaiLandPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-land"
      areaName="Dubai Land"
    />
  );
}