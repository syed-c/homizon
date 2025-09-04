import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/the-views/fairways-north'] || {
  title: 'Appliance Repairs in Fairways North - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Fairways North. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsFairwaysNorthPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="the-views"
      areaName="The Views"
      subarea="fairways-north"
      subareaName="Fairways North"
    />
  );
}