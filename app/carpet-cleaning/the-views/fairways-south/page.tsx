import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/the-views/fairways-south'] || {
  title: 'Carpet Cleaning in Fairways South - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Fairways South. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningFairwaysSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="the-views"
      areaName="The Views"
      subarea="fairways-south"
      subareaName="Fairways South"
    />
  );
}