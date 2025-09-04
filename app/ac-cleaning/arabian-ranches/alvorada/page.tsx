import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/arabian-ranches/alvorada'] || {
  title: 'AC Cleaning & Sanitization in Alvorada - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Alvorada. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlvoradaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="alvorada"
      subareaName="Alvorada"
    />
  );
}