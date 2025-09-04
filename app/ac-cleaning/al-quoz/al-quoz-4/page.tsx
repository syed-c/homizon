import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-quoz/al-quoz-4'] || {
  title: 'AC Cleaning & Sanitization in Al Quoz 4 - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Quoz 4. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlQuoz4Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-quoz"
      areaName="Al Quoz"
      subarea="al-quoz-4"
      subareaName="Al Quoz 4"
    />
  );
}