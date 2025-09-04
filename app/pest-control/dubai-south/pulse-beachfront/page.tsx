import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/dubai-south/pulse-beachfront'] || {
  title: 'Pest Control in Pulse Beachfront - Professional Services | HOMIZON',
  description: 'Professional pest control services in Pulse Beachfront. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlPulseBeachfrontPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="dubai-south"
      areaName="Dubai South"
      subarea="pulse-beachfront"
      subareaName="Pulse Beachfront"
    />
  );
}