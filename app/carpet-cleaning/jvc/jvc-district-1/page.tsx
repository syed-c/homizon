import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jvc/jvc-district-1'] || {
  title: 'Carpet Cleaning in JVC District 1 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in JVC District 1. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningJVCDistrict1Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jvc"
      areaName="JVC"
      subarea="jvc-district-1"
      subareaName="JVC District 1"
    />
  );
}