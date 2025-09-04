import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/deira'] || {
  title: 'AC Cleaning & Sanitization in Deira - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Deira. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationDeiraPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="deira"
      areaName="Deira"
    />
  );
}