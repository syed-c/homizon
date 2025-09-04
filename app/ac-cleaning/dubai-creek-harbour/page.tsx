import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-creek-harbour'] || {
  title: 'AC Cleaning & Sanitization in Dubai Creek Harbour - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Dubai Creek Harbour. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationDubaiCreekHarbourPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
    />
  );
}