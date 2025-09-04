import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/jebel-ali'] || {
  title: 'AC Cleaning & Sanitization in Jebel Ali - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Jebel Ali. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationJebelAliPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="jebel-ali"
      areaName="Jebel Ali"
    />
  );
}