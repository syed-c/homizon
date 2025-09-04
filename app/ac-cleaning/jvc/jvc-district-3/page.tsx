import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/jvc/jvc-district-3'] || {
  title: 'AC Cleaning & Sanitization in JVC District 3 - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in JVC District 3. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationJVCDistrict3Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="jvc"
      areaName="JVC"
      subarea="jvc-district-3"
      subareaName="JVC District 3"
    />
  );
}