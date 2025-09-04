import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/jumeirah/jumeirah-1'] || {
  title: 'Pest Control in Jumeirah 1 - Professional Services | HOMIZON',
  description: 'Professional pest control services in Jumeirah 1. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlJumeirah1Page() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="jumeirah-1"
      subareaName="Jumeirah 1"
    />
  );
}