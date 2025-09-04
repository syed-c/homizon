import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/jumeirah/jumeirah-2'] || {
  title: 'AC Servicing in Jumeirah 2 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Jumeirah 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingJumeirah2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="jumeirah-2"
      subareaName="Jumeirah 2"
    />
  );
}