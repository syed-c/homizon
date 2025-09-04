import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-hills-estate'] || {
  title: 'AC Cleaning & Sanitization in Dubai Hills Estate - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Dubai Hills Estate. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationDubaiHillsEstatePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
    />
  );
}