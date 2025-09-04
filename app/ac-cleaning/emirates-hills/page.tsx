import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/emirates-hills'] || {
  title: 'AC Cleaning & Sanitization in Emirates Hills - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Emirates Hills. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationEmiratesHillsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="emirates-hills"
      areaName="Emirates Hills"
    />
  );
}