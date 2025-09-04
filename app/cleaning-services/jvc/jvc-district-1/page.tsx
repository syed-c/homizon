import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/jvc/jvc-district-1'] || {
  title: 'Cleaning Services in JVC District 1 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in JVC District 1. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesJVCDistrict1Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="jvc"
      areaName="JVC"
      subarea="jvc-district-1"
      subareaName="JVC District 1"
    />
  );
}