import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/the-views/fairways-south'] || {
  title: 'AC Cleaning & Sanitization in Fairways South - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Fairways South. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationFairwaysSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="the-views"
      areaName="The Views"
      subarea="fairways-south"
      subareaName="Fairways South"
    />
  );
}