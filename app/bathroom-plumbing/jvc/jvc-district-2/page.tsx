import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/jvc/jvc-district-2'] || {
  title: 'Bathroom Plumbing in JVC District 2 - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in JVC District 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingJVCDistrict2Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="jvc"
      areaName="JVC"
      subarea="jvc-district-2"
      subareaName="JVC District 2"
    />
  );
}