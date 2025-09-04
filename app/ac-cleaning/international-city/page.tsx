import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/international-city'] || {
  title: 'AC Cleaning & Sanitization in International City - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in International City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationInternationalCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="international-city"
      areaName="International City"
    />
  );
}