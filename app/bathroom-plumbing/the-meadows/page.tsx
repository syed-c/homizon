import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/the-meadows'] || {
  title: 'Bathroom Plumbing in The Meadows - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in The Meadows. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingTheMeadowsPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="the-meadows"
      areaName="The Meadows"
    />
  );
}