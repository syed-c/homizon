import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/the-views/fairways-north'] || {
  title: 'Cleaning Services in Fairways North - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Fairways North. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesFairwaysNorthPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="the-views"
      areaName="The Views"
      subarea="fairways-north"
      subareaName="Fairways North"
    />
  );
}