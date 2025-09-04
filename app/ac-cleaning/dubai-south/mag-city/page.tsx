import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-south/mag-city'] || {
  title: 'AC Cleaning & Sanitization in MAG City - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in MAG City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationMAGCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-south"
      areaName="Dubai South"
      subarea="mag-city"
      subareaName="MAG City"
    />
  );
}