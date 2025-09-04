import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/the-springs'] || {
  title: 'Appliance Repairs in The Springs - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in The Springs. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsTheSpringsPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="the-springs"
      areaName="The Springs"
    />
  );
}