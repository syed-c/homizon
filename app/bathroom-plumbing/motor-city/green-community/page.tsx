import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/motor-city/green-community'] || {
  title: 'Bathroom Plumbing in Green Community - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Green Community. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingGreenCommunityPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="motor-city"
      areaName="Motor City"
      subarea="green-community"
      subareaName="Green Community"
    />
  );
}