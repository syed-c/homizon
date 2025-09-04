import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-barsha/al-barsha-3'] || {
  title: 'AC Cleaning & Sanitization in Al Barsha 3 - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Barsha 3. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlBarsha3Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-3"
      subareaName="Al Barsha 3"
    />
  );
}