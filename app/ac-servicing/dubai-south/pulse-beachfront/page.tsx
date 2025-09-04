import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-south/pulse-beachfront'] || {
  title: 'AC Servicing in Pulse Beachfront - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Pulse Beachfront. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingPulseBeachfrontPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-south"
      areaName="Dubai South"
      subarea="pulse-beachfront"
      subareaName="Pulse Beachfront"
    />
  );
}