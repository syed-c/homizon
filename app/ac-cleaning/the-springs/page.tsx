import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/the-springs'] || {
  title: 'AC Cleaning & Sanitization in The Springs - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in The Springs. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationTheSpringsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="the-springs"
      areaName="The Springs"
    />
  );
}