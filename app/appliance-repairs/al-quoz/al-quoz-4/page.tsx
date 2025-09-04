import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-quoz/al-quoz-4'] || {
  title: 'Appliance Repairs in Al Quoz 4 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Quoz 4. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlQuoz4Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-quoz"
      areaName="Al Quoz"
      subarea="al-quoz-4"
      subareaName="Al Quoz 4"
    />
  );
}