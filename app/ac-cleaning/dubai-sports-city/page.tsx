import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-sports-city'] || {
  title: 'AC Cleaning & Sanitization in Dubai Sports City - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Dubai Sports City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationDubaiSportsCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
    />
  );
}