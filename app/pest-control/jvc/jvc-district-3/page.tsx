import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/jvc/jvc-district-3'] || {
  title: 'Pest Control in JVC District 3 - Professional Services | HOMIZON',
  description: 'Professional pest control services in JVC District 3. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlJVCDistrict3Page() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="jvc"
      areaName="JVC"
      subarea="jvc-district-3"
      subareaName="JVC District 3"
    />
  );
}