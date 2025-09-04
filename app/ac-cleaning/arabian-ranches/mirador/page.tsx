import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/arabian-ranches/mirador'] || {
  title: 'AC Cleaning & Sanitization in Mirador - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Mirador. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationMiradorPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="mirador"
      subareaName="Mirador"
    />
  );
}