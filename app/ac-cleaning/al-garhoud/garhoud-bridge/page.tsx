import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-garhoud/garhoud-bridge'] || {
  title: 'AC Cleaning & Sanitization in Garhoud Bridge - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Garhoud Bridge. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationGarhoudBridgePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-garhoud"
      areaName="Al Garhoud"
      subarea="garhoud-bridge"
      subareaName="Garhoud Bridge"
    />
  );
}