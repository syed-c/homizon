import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/nad-al-sheba'] || {
  title: 'AC Cleaning & Sanitization in Nad Al Sheba - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Nad Al Sheba. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationNadAlShebaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="nad-al-sheba"
      areaName="Nad Al Sheba"
    />
  );
}