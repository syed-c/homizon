import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-twar/twar-2'] || {
  title: 'AC Cleaning & Sanitization in Twar 2 - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Twar 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationTwar2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-twar"
      areaName="Al Twar"
      subarea="twar-2"
      subareaName="Twar 2"
    />
  );
}