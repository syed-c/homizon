import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/the-views/fairways-south'] || {
  title: 'Pest Control in Fairways South - Professional Services | HOMIZON',
  description: 'Professional pest control services in Fairways South. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlFairwaysSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="the-views"
      areaName="The Views"
      subarea="fairways-south"
      subareaName="Fairways South"
    />
  );
}