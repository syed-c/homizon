import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/business-bay/bay-square'] || {
  title: 'Appliance Repairs in Bay Square - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Bay Square. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsBaySquarePage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="business-bay"
      areaName="Business Bay"
      subarea="bay-square"
      subareaName="Bay Square"
    />
  );
}