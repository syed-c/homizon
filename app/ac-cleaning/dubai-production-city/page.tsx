import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-production-city'] || {
  title: 'AC Cleaning & Sanitization in Dubai Production City - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Dubai Production City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationDubaiProductionCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-production-city"
      areaName="Dubai Production City"
    />
  );
}