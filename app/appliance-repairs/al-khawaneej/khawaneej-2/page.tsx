import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-khawaneej/khawaneej-2'] || {
  title: 'Appliance Repairs in Khawaneej 2 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Khawaneej 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsKhawaneej2Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-khawaneej"
      areaName="Al Khawaneej"
      subarea="khawaneej-2"
      subareaName="Khawaneej 2"
    />
  );
}