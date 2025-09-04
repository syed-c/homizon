import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/the-views/golf-tower'] || {
  title: 'Appliance Repairs in Golf Tower - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Golf Tower. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsGolfTowerPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="the-views"
      areaName="The Views"
      subarea="golf-tower"
      subareaName="Golf Tower"
    />
  );
}