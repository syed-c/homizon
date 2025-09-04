import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/downtown-dubai/opera-district'] || {
  title: 'AC Cleaning & Sanitization in Opera District - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Opera District. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationOperaDistrictPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="opera-district"
      subareaName="Opera District"
    />
  );
}