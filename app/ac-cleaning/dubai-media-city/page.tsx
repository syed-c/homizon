import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-media-city'] || {
  title: 'AC Cleaning & Sanitization in Dubai Media City - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Dubai Media City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationDubaiMediaCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-media-city"
      areaName="Dubai Media City"
    />
  );
}