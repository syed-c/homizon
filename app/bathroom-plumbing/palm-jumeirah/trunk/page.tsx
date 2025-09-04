import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/palm-jumeirah/trunk'] || {
  title: 'Bathroom Plumbing in Trunk - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Trunk. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingTrunkPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="trunk"
      subareaName="Trunk"
    />
  );
}