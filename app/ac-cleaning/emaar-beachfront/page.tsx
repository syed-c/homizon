import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/emaar-beachfront'] || {
  title: 'AC Cleaning & Sanitization in Emaar Beachfront - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Emaar Beachfront. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationEmaarBeachfrontPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="emaar-beachfront"
      areaName="Emaar Beachfront"
    />
  );
}