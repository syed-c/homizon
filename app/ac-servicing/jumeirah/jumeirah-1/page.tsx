import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/jumeirah/jumeirah-1'] || {
  title: 'AC Servicing in Jumeirah 1 - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Jumeirah 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingJumeirah1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="jumeirah-1"
      subareaName="Jumeirah 1"
    />
  );
}