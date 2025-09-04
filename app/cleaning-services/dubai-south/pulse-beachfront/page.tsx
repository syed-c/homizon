import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-south/pulse-beachfront'] || {
  title: 'Cleaning Services in Pulse Beachfront - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Pulse Beachfront. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesPulseBeachfrontPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-south"
      areaName="Dubai South"
      subarea="pulse-beachfront"
      subareaName="Pulse Beachfront"
    />
  );
}