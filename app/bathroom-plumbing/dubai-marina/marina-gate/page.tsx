import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-marina/marina-gate'] || {
  title: 'Bathroom Plumbing in Marina Gate - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Marina Gate. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingMarinaGatePage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-gate"
      subareaName="Marina Gate"
    />
  );
}