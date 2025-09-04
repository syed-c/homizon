import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-barari'] || {
  title: 'AC Cleaning & Sanitization in Al Barari - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Barari. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlBarariPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-barari"
      areaName="Al Barari"
    />
  );
}