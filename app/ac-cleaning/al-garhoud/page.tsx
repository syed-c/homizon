import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-garhoud'] || {
  title: 'AC Cleaning & Sanitization in Al Garhoud - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Garhoud. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlGarhoudPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-garhoud"
      areaName="Al Garhoud"
    />
  );
}