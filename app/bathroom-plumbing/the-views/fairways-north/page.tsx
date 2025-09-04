import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/the-views/fairways-north'] || {
  title: 'Bathroom Plumbing in Fairways North - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Fairways North. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingFairwaysNorthPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="the-views"
      areaName="The Views"
      subarea="fairways-north"
      subareaName="Fairways North"
    />
  );
}