import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/business-bay'] || {
  title: 'AC Cleaning & Sanitization in Business Bay - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Business Bay. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationBusinessBayPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="business-bay"
      areaName="Business Bay"
    />
  );
}