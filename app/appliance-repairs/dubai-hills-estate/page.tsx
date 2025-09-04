import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-hills-estate'] || {
  title: 'Appliance Repairs in Dubai Hills Estate - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Dubai Hills Estate. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsDubaiHillsEstatePage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
    />
  );
}