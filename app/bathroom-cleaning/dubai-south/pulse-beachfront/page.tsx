import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-south/pulse-beachfront'] || {
  title: 'Bathroom Deep Cleaning in Pulse Beachfront - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Pulse Beachfront. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningPulseBeachfrontPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-south"
      areaName="Dubai South"
      subarea="pulse-beachfront"
      subareaName="Pulse Beachfront"
    />
  );
}