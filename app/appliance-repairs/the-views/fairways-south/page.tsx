import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/the-views/fairways-south'] || {
  title: 'Appliance Repairs in Fairways South - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Fairways South. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsFairwaysSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="the-views"
      areaName="The Views"
      subarea="fairways-south"
      subareaName="Fairways South"
    />
  );
}