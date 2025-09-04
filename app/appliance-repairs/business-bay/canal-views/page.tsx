import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/business-bay/canal-views'] || {
  title: 'Appliance Repairs in Canal Views - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Canal Views. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsCanalViewsPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="business-bay"
      areaName="Business Bay"
      subarea="canal-views"
      subareaName="Canal Views"
    />
  );
}