import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/business-bay/bay-square'] || {
  title: 'AC Cleaning & Sanitization in Bay Square - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Bay Square. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationBaySquarePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="business-bay"
      areaName="Business Bay"
      subarea="bay-square"
      subareaName="Bay Square"
    />
  );
}