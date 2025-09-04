import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/business-bay/executive-bay'] || {
  title: 'AC Cleaning & Sanitization in Executive Bay - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Executive Bay. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationExecutiveBayPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="business-bay"
      areaName="Business Bay"
      subarea="executive-bay"
      subareaName="Executive Bay"
    />
  );
}