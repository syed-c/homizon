import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/bluewaters-island'] || {
  title: 'AC Cleaning & Sanitization in Bluewaters Island - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Bluewaters Island. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationBluewatersIslandPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="bluewaters-island"
      areaName="Bluewaters Island"
    />
  );
}