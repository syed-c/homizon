import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-hills-estate/golf-suites'] || {
  title: 'AC Cleaning & Sanitization in Golf Suites - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Golf Suites. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationGolfSuitesPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
      subarea="golf-suites"
      subareaName="Golf Suites"
    />
  );
}