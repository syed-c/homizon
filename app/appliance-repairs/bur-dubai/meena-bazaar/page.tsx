import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/bur-dubai/meena-bazaar'] || {
  title: 'Appliance Repairs in Meena Bazaar - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Meena Bazaar. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsMeenaBazaarPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="meena-bazaar"
      subareaName="Meena Bazaar"
    />
  );
}