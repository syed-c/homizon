import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/downtown-dubai/dubai-mall-district'] || {
  title: 'AC Cleaning & Sanitization in Dubai Mall District - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Dubai Mall District. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationDubaiMallDistrictPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="dubai-mall-district"
      subareaName="Dubai Mall District"
    />
  );
}