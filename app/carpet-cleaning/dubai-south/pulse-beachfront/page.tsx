import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-south/pulse-beachfront'] || {
  title: 'Carpet Cleaning in Pulse Beachfront - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Pulse Beachfront. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningPulseBeachfrontPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-south"
      areaName="Dubai South"
      subarea="pulse-beachfront"
      subareaName="Pulse Beachfront"
    />
  );
}