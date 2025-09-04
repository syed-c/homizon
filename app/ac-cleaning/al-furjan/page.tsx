import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-furjan'] || {
  title: 'AC Cleaning & Sanitization in Al Furjan - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Furjan. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlFurjanPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-furjan"
      areaName="Al Furjan"
    />
  );
}