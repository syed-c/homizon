import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/jumeirah/jumeirah-3'] || {
  title: 'Bathroom Plumbing in Jumeirah 3 - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Jumeirah 3. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingJumeirah3Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="jumeirah-3"
      subareaName="Jumeirah 3"
    />
  );
}