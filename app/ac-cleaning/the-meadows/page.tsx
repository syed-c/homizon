import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/the-meadows'] || {
  title: 'AC Cleaning & Sanitization in The Meadows - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in The Meadows. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationTheMeadowsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="the-meadows"
      areaName="The Meadows"
    />
  );
}