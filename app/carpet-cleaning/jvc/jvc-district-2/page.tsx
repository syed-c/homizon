import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jvc/jvc-district-2'] || {
  title: 'Carpet Cleaning in JVC District 2 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in JVC District 2. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningJVCDistrict2Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jvc"
      areaName="JVC"
      subarea="jvc-district-2"
      subareaName="JVC District 2"
    />
  );
}