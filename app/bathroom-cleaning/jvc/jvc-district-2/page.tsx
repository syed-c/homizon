import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/jvc/jvc-district-2'] || {
  title: 'Bathroom Deep Cleaning in JVC District 2 - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in JVC District 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningJVCDistrict2Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="jvc"
      areaName="JVC"
      subarea="jvc-district-2"
      subareaName="JVC District 2"
    />
  );
}