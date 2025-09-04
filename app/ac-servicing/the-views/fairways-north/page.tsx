import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/the-views/fairways-north'] || {
  title: 'AC Servicing in Fairways North - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Fairways North. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingFairwaysNorthPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="the-views"
      areaName="The Views"
      subarea="fairways-north"
      subareaName="Fairways North"
    />
  );
}