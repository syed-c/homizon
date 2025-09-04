import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/motor-city/green-community'] || {
  title: 'AC Cleaning & Sanitization in Green Community - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Green Community. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationGreenCommunityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="motor-city"
      areaName="Motor City"
      subarea="green-community"
      subareaName="Green Community"
    />
  );
}