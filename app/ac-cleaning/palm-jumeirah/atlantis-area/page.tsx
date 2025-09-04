import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/palm-jumeirah/atlantis-area'] || {
  title: 'AC Cleaning & Sanitization in Atlantis Area - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Atlantis Area. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAtlantisAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="atlantis-area"
      subareaName="Atlantis Area"
    />
  );
}