import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-satwa/satwa-central'] || {
  title: 'AC Cleaning & Sanitization in Satwa Central - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Satwa Central. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationSatwaCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-satwa"
      areaName="Al Satwa"
      subarea="satwa-central"
      subareaName="Satwa Central"
    />
  );
}