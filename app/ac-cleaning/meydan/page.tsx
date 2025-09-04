import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/meydan'] || {
  title: 'AC Cleaning & Sanitization in Meydan - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Meydan. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationMeydanPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="meydan"
      areaName="Meydan"
    />
  );
}