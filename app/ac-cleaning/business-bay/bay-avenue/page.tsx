import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/business-bay/bay-avenue'] || {
  title: 'AC Cleaning & Sanitization in Bay Avenue - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Bay Avenue. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationBayAvenuePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="business-bay"
      areaName="Business Bay"
      subarea="bay-avenue"
      subareaName="Bay Avenue"
    />
  );
}