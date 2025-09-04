import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-investment-park/green-community-dip'] || {
  title: 'Bathroom Plumbing in Green Community DIP - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Green Community DIP. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingGreenCommunityDIPPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="green-community-dip"
      subareaName="Green Community DIP"
    />
  );
}