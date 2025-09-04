import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/jumeirah/jumeirah-3'] || {
  title: 'Pest Control in Jumeirah 3 - Professional Services | HOMIZON',
  description: 'Professional pest control services in Jumeirah 3. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlJumeirah3Page() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="jumeirah-3"
      subareaName="Jumeirah 3"
    />
  );
}