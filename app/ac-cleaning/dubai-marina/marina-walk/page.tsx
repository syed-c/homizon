import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-marina/marina-walk'] || {
  title: 'AC Cleaning & Sanitization in Marina Walk - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Marina Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationMarinaWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-walk"
      subareaName="Marina Walk"
    />
  );
}