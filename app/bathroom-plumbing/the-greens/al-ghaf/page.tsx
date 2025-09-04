import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/the-greens/al-ghaf'] || {
  title: 'Bathroom Plumbing in Al Ghaf - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Ghaf. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlGhafPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="the-greens"
      areaName="The Greens"
      subarea="al-ghaf"
      subareaName="Al Ghaf"
    />
  );
}