import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/jumeirah'] || {
  title: 'AC Cleaning & Sanitization in Jumeirah - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationJumeirahPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="jumeirah"
      areaName="Jumeirah"
    />
  );
}