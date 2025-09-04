import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/deira/al-sabkha'] || {
  title: 'AC Cleaning & Sanitization in Al Sabkha - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Sabkha. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlSabkhaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="deira"
      areaName="Deira"
      subarea="al-sabkha"
      subareaName="Al Sabkha"
    />
  );
}