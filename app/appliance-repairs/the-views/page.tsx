import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/the-views'] || {
  title: 'Appliance Repairs in The Views - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in The Views. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsTheViewsPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="the-views"
      areaName="The Views"
    />
  );
}