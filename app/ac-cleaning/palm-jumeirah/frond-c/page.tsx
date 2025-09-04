import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/palm-jumeirah/frond-c'] || {
  title: 'AC Cleaning & Sanitization in Frond C - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Frond C. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationFrondCPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="frond-c"
      subareaName="Frond C"
    />
  );
}