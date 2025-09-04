import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jvc/jvc-district-3'] || {
  title: 'Carpet Cleaning in JVC District 3 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in JVC District 3. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningJVCDistrict3Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jvc"
      areaName="JVC"
      subarea="jvc-district-3"
      subareaName="JVC District 3"
    />
  );
}