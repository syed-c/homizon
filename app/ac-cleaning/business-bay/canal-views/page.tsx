import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/business-bay/canal-views'] || {
  title: 'AC Cleaning & Sanitization in Canal Views - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Canal Views. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationCanalViewsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="business-bay"
      areaName="Business Bay"
      subarea="canal-views"
      subareaName="Canal Views"
    />
  );
}