import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/bluewaters-island'] || {
  title: 'Bathroom Plumbing in Bluewaters Island - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Bluewaters Island. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingBluewatersIslandPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="bluewaters-island"
      areaName="Bluewaters Island"
    />
  );
}