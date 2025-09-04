import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/emirates-hills'] || {
  title: 'Bathroom Plumbing in Emirates Hills - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Emirates Hills. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingEmiratesHillsPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="emirates-hills"
      areaName="Emirates Hills"
    />
  );
}