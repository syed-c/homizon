import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/dubai-hills-estate/parkway'] || {
  title: 'Appliance Repairs in Parkway - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Parkway. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsParkwayPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
      subarea="parkway"
      subareaName="Parkway"
    />
  );
}