import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-islands'] || {
  title: 'AC Cleaning & Sanitization in Dubai Islands - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Dubai Islands. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationDubaiIslandsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-islands"
      areaName="Dubai Islands"
    />
  );
}