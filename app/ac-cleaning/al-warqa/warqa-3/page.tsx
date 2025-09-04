import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-warqa/warqa-3'] || {
  title: 'AC Cleaning & Sanitization in Warqa 3 - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Warqa 3. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationWarqa3Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-warqa"
      areaName="Al Warqa"
      subarea="warqa-3"
      subareaName="Warqa 3"
    />
  );
}