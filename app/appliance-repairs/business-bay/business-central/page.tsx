import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/business-bay/business-central'] || {
  title: 'Appliance Repairs in Business Central - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Business Central. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsBusinessCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="business-bay"
      areaName="Business Bay"
      subarea="business-central"
      subareaName="Business Central"
    />
  );
}