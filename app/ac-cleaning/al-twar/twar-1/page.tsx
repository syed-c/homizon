import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-twar/twar-1'] || {
  title: 'AC Cleaning & Sanitization in Twar 1 - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Twar 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationTwar1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-twar"
      areaName="Al Twar"
      subarea="twar-1"
      subareaName="Twar 1"
    />
  );
}