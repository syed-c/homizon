import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-investment-park/dip-1'] || {
  title: 'Bathroom Plumbing in DIP 1 - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in DIP 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingDIP1Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="dip-1"
      subareaName="DIP 1"
    />
  );
}