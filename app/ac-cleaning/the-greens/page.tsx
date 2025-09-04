import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/the-greens'] || {
  title: 'AC Cleaning & Sanitization in The Greens - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in The Greens. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationTheGreensPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="the-greens"
      areaName="The Greens"
    />
  );
}