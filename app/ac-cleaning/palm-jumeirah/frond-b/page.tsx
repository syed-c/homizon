import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/palm-jumeirah/frond-b'] || {
  title: 'AC Cleaning & Sanitization in Frond B - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Frond B. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationFrondBPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="frond-b"
      subareaName="Frond B"
    />
  );
}