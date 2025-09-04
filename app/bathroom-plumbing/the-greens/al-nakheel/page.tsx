import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/the-greens/al-nakheel'] || {
  title: 'Bathroom Plumbing in Al Nakheel - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Nakheel. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlNakheelPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="the-greens"
      areaName="The Greens"
      subarea="al-nakheel"
      subareaName="Al Nakheel"
    />
  );
}