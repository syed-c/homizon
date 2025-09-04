import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-khawaneej'] || {
  title: 'AC Cleaning & Sanitization in Al Khawaneej - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Khawaneej. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlKhawaneejPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-khawaneej"
      areaName="Al Khawaneej"
    />
  );
}