import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-festival-city/creek-waters'] || {
  title: 'AC Cleaning & Sanitization in Creek Waters - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Creek Waters. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationCreekWatersPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="creek-waters"
      subareaName="Creek Waters"
    />
  );
}