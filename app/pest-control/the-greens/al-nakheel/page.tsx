import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/the-greens/al-nakheel'] || {
  title: 'Pest Control in Al Nakheel - Professional Services | HOMIZON',
  description: 'Professional pest control services in Al Nakheel. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlAlNakheelPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="the-greens"
      areaName="The Greens"
      subarea="al-nakheel"
      subareaName="Al Nakheel"
    />
  );
}