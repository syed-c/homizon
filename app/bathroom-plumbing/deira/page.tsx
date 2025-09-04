import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/deira'] || {
  title: 'Bathroom Plumbing in Deira - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Deira. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingDeiraPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="deira"
      areaName="Deira"
    />
  );
}