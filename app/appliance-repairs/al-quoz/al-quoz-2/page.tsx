import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-quoz/al-quoz-2'] || {
  title: 'Appliance Repairs in Al Quoz 2 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Quoz 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlQuoz2Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-quoz"
      areaName="Al Quoz"
      subarea="al-quoz-2"
      subareaName="Al Quoz 2"
    />
  );
}