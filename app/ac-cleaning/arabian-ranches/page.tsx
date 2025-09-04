import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/arabian-ranches'] || {
  title: 'AC Cleaning & Sanitization in Arabian Ranches - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Arabian Ranches. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationArabianRanchesPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="arabian-ranches"
      areaName="Arabian Ranches"
    />
  );
}