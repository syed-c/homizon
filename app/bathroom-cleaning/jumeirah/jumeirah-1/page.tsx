import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/jumeirah/jumeirah-1'] || {
  title: 'Bathroom Deep Cleaning in Jumeirah 1 - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Jumeirah 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningJumeirah1Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="jumeirah-1"
      subareaName="Jumeirah 1"
    />
  );
}