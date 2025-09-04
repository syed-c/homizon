import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/the-views/fairways-north'] || {
  title: 'AC Cleaning & Sanitization in Fairways North - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Fairways North. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationFairwaysNorthPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="the-views"
      areaName="The Views"
      subarea="fairways-north"
      subareaName="Fairways North"
    />
  );
}