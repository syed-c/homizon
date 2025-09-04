import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/city-walk'] || {
  title: 'AC Cleaning & Sanitization in City Walk - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in City Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationCityWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="city-walk"
      areaName="City Walk"
    />
  );
}