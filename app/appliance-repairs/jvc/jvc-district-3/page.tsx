import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/jvc/jvc-district-3'] || {
  title: 'Appliance Repairs in JVC District 3 - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in JVC District 3. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsJVCDistrict3Page() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="jvc"
      areaName="JVC"
      subarea="jvc-district-3"
      subareaName="JVC District 3"
    />
  );
}