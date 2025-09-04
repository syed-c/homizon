import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-twar'] || {
  title: 'AC Cleaning & Sanitization in Al Twar - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Twar. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlTwarPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-twar"
      areaName="Al Twar"
    />
  );
}