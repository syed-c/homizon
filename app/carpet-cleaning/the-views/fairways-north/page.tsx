import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/the-views/fairways-north'] || {
  title: 'Carpet Cleaning in Fairways North - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Fairways North. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningFairwaysNorthPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="the-views"
      areaName="The Views"
      subarea="fairways-north"
      subareaName="Fairways North"
    />
  );
}