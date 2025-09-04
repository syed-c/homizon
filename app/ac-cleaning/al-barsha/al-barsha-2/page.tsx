import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-barsha/al-barsha-2'] || {
  title: 'AC Cleaning & Sanitization in Al Barsha 2 - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Barsha 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlBarsha2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-2"
      subareaName="Al Barsha 2"
    />
  );
}