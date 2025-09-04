import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/business-bay/bay-avenue'] || {
  title: 'Appliance Repairs in Bay Avenue - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Bay Avenue. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsBayAvenuePage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="business-bay"
      areaName="Business Bay"
      subarea="bay-avenue"
      subareaName="Bay Avenue"
    />
  );
}