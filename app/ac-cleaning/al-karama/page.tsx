import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-karama'] || {
  title: 'AC Cleaning & Sanitization in Al Karama - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Karama. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlKaramaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-karama"
      areaName="Al Karama"
    />
  );
}