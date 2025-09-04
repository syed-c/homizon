import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/arabian-ranches/savannah'] || {
  title: 'AC Cleaning & Sanitization in Savannah - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Savannah. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationSavannahPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="savannah"
      subareaName="Savannah"
    />
  );
}