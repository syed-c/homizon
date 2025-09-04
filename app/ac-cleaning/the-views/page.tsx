import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/the-views'] || {
  title: 'AC Cleaning & Sanitization in The Views - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in The Views. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationTheViewsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="the-views"
      areaName="The Views"
    />
  );
}