import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-internet-city'] || {
  title: 'AC Cleaning & Sanitization in Dubai Internet City - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Dubai Internet City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationDubaiInternetCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-internet-city"
      areaName="Dubai Internet City"
    />
  );
}