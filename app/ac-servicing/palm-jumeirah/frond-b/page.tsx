import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/palm-jumeirah/frond-b'] || {
  title: 'AC Servicing in Frond B - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Frond B. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingFrondBPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="frond-b"
      subareaName="Frond B"
    />
  );
}