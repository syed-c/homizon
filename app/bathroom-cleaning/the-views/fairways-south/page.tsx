import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/the-views/fairways-south'] || {
  title: 'Bathroom Deep Cleaning in Fairways South - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Fairways South. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningFairwaysSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="the-views"
      areaName="The Views"
      subarea="fairways-south"
      subareaName="Fairways South"
    />
  );
}