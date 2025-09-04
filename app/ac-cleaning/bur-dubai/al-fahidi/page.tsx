import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/bur-dubai/al-fahidi'] || {
  title: 'AC Cleaning & Sanitization in Al Fahidi - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Fahidi. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlFahidiPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="al-fahidi"
      subareaName="Al Fahidi"
    />
  );
}