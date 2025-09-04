import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/jvc/jvc-district-3'] || {
  title: 'Bathroom Deep Cleaning in JVC District 3 - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in JVC District 3. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningJVCDistrict3Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="jvc"
      areaName="JVC"
      subarea="jvc-district-3"
      subareaName="JVC District 3"
    />
  );
}