import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-rashidiya/rashidiya-1'] || {
  title: 'Appliance Repairs in Rashidiya 1 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Rashidiya 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsRashidiya1Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-rashidiya"
      areaName="Al Rashidiya"
      subarea="rashidiya-1"
      subareaName="Rashidiya 1"
    />
  );
}