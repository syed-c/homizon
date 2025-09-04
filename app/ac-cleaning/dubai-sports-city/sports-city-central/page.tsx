import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-sports-city/sports-city-central'] || {
  title: 'AC Cleaning & Sanitization in Sports City Central - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Sports City Central. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationSportsCityCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="sports-city-central"
      subareaName="Sports City Central"
    />
  );
}