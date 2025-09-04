import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/jumeirah/jumeirah-1'] || {
  title: 'AC Cleaning & Sanitization in Jumeirah 1 - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Jumeirah 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationJumeirah1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="jumeirah-1"
      subareaName="Jumeirah 1"
    />
  );
}