import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/discovery-gardens'] || {
  title: 'AC Cleaning & Sanitization in Discovery Gardens - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Discovery Gardens. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationDiscoveryGardensPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="discovery-gardens"
      areaName="Discovery Gardens"
    />
  );
}