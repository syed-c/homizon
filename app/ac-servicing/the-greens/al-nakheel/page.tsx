import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/the-greens/al-nakheel'] || {
  title: 'AC Servicing in Al Nakheel - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Al Nakheel. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingAlNakheelPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="the-greens"
      areaName="The Greens"
      subarea="al-nakheel"
      subareaName="Al Nakheel"
    />
  );
}