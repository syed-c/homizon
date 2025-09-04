import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-marina'] || {
  title: 'AC Cleaning & Sanitization in Dubai Marina - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Dubai Marina. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationDubaiMarinaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-marina"
      areaName="Dubai Marina"
    />
  );
}