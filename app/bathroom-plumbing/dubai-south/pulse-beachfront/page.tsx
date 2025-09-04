import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-south/pulse-beachfront'] || {
  title: 'Bathroom Plumbing in Pulse Beachfront - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Pulse Beachfront. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingPulseBeachfrontPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-south"
      areaName="Dubai South"
      subarea="pulse-beachfront"
      subareaName="Pulse Beachfront"
    />
  );
}