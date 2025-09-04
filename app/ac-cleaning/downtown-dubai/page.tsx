import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/downtown-dubai'] || {
  title: 'AC Cleaning & Sanitization in Downtown Dubai - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Downtown Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationDowntownDubaiPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="downtown-dubai"
      areaName="Downtown Dubai"
    />
  );
}