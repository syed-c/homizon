import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-nahda'] || {
  title: 'AC Cleaning & Sanitization in Al Nahda - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Nahda. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlNahdaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-nahda"
      areaName="Al Nahda"
    />
  );
}