import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-production-city'] || {
  title: 'Appliance Repairs in Dubai Production City - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Dubai Production City. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsDubaiProductionCityPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-production-city"
      areaName="Dubai Production City"
    />
  );
}