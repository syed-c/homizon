import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/the-views/fairways-south'] || {
  title: 'Bathroom Plumbing in Fairways South - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Fairways South. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingFairwaysSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="the-views"
      areaName="The Views"
      subarea="fairways-south"
      subareaName="Fairways South"
    />
  );
}