import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-barsha/al-barsha-2'] || {
  title: 'Appliance Repairs in Al Barsha 2 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Al Barsha 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsAlBarsha2Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-2"
      subareaName="Al Barsha 2"
    />
  );
}