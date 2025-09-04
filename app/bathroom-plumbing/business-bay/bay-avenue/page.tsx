import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/business-bay/bay-avenue'] || {
  title: 'Bathroom Plumbing in Bay Avenue - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Bay Avenue. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingBayAvenuePage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="business-bay"
      areaName="Business Bay"
      subarea="bay-avenue"
      subareaName="Bay Avenue"
    />
  );
}