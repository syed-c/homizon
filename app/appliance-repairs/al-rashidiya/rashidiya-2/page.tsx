import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-rashidiya/rashidiya-2'] || {
  title: 'Appliance Repairs in Rashidiya 2 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Rashidiya 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsRashidiya2Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-rashidiya"
      areaName="Al Rashidiya"
      subarea="rashidiya-2"
      subareaName="Rashidiya 2"
    />
  );
}