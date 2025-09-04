import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/city-walk'] || {
  title: 'Appliance Repairs in City Walk - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in City Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsCityWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="city-walk"
      areaName="City Walk"
    />
  );
}