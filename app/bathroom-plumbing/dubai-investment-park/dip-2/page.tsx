import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-investment-park/dip-2'] || {
  title: 'Bathroom Plumbing in DIP 2 - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in DIP 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingDIP2Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="dip-2"
      subareaName="DIP 2"
    />
  );
}