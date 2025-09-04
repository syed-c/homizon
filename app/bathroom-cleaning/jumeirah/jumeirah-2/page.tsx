import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/jumeirah/jumeirah-2'] || {
  title: 'Bathroom Deep Cleaning in Jumeirah 2 - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Jumeirah 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningJumeirah2Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="jumeirah-2"
      subareaName="Jumeirah 2"
    />
  );
}