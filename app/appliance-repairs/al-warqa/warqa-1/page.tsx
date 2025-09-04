import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-warqa/warqa-1'] || {
  title: 'Appliance Repairs in Warqa 1 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Warqa 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsWarqa1Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-warqa"
      areaName="Al Warqa"
      subarea="warqa-1"
      subareaName="Warqa 1"
    />
  );
}