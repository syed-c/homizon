import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/jvc/jvc-district-2'] || {
  title: 'Cleaning Services in JVC District 2 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in JVC District 2. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesJVCDistrict2Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="jvc"
      areaName="JVC"
      subarea="jvc-district-2"
      subareaName="JVC District 2"
    />
  );
}