import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-marina/marina-promenade'] || {
  title: 'AC Cleaning & Sanitization in Marina Promenade - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Marina Promenade. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationMarinaPromenadePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-promenade"
      subareaName="Marina Promenade"
    />
  );
}