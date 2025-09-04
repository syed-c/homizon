import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/the-views/fairways-south'] || {
  title: 'AC Servicing in Fairways South - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Fairways South. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingFairwaysSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="the-views"
      areaName="The Views"
      subarea="fairways-south"
      subareaName="Fairways South"
    />
  );
}