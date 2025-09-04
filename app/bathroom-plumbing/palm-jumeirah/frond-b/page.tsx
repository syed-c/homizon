import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/palm-jumeirah/frond-b'] || {
  title: 'Bathroom Plumbing in Frond B - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Frond B. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingFrondBPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="frond-b"
      subareaName="Frond B"
    />
  );
}