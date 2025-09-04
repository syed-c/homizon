import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/the-greens'] || {
  title: 'Bathroom Plumbing in The Greens - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in The Greens. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingTheGreensPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="the-greens"
      areaName="The Greens"
    />
  );
}