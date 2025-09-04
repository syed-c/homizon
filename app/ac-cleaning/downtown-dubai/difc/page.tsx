import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/downtown-dubai/difc'] || {
  title: 'AC Cleaning & Sanitization in DIFC - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in DIFC. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationDIFCPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="difc"
      subareaName="DIFC"
    />
  );
}