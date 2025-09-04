import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/jvc/jvc-district-1'] || {
  title: 'Bathroom Plumbing in JVC District 1 - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in JVC District 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingJVCDistrict1Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="jvc"
      areaName="JVC"
      subarea="jvc-district-1"
      subareaName="JVC District 1"
    />
  );
}