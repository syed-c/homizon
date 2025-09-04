import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/business-bay/executive-bay'] || {
  title: 'Appliance Repairs in Executive Bay - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Executive Bay. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsExecutiveBayPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="business-bay"
      areaName="Business Bay"
      subarea="executive-bay"
      subareaName="Executive Bay"
    />
  );
}