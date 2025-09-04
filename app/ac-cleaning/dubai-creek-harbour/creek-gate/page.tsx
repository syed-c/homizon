import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-creek-harbour/creek-gate'] || {
  title: 'AC Cleaning & Sanitization in Creek Gate - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Creek Gate. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationCreekGatePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-creek-harbour"
      areaName="Dubai Creek Harbour"
      subarea="creek-gate"
      subareaName="Creek Gate"
    />
  );
}