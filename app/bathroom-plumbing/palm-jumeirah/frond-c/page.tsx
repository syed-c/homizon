import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/palm-jumeirah/frond-c'] || {
  title: 'Bathroom Plumbing in Frond C - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Frond C. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingFrondCPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="frond-c"
      subareaName="Frond C"
    />
  );
}