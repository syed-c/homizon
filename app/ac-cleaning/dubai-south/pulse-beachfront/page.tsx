import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-south/pulse-beachfront'] || {
  title: 'AC Cleaning & Sanitization in Pulse Beachfront - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Pulse Beachfront. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationPulseBeachfrontPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-south"
      areaName="Dubai South"
      subarea="pulse-beachfront"
      subareaName="Pulse Beachfront"
    />
  );
}