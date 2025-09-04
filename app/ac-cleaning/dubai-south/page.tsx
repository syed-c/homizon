import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-south'] || {
  title: 'AC Cleaning & Sanitization in Dubai South - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Dubai South. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationDubaiSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-south"
      areaName="Dubai South"
    />
  );
}