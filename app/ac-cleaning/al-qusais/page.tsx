import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-qusais'] || {
  title: 'AC Cleaning & Sanitization in Al Qusais - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Qusais. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlQusaisPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-qusais"
      areaName="Al Qusais"
    />
  );
}