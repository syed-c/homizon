import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/the-views/fairways-north'] || {
  title: 'Pest Control in Fairways North - Professional Services | HOMIZON',
  description: 'Professional pest control services in Fairways North. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlFairwaysNorthPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="the-views"
      areaName="The Views"
      subarea="fairways-north"
      subareaName="Fairways North"
    />
  );
}