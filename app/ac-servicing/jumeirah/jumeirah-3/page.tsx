import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/jumeirah/jumeirah-3'] || {
  title: 'AC Servicing in Jumeirah 3 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Jumeirah 3. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingJumeirah3Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="jumeirah-3"
      subareaName="Jumeirah 3"
    />
  );
}