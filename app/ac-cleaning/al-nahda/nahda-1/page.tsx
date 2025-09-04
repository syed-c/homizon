import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-nahda/nahda-1'] || {
  title: 'AC Cleaning & Sanitization in Nahda 1 - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Nahda 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationNahda1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-nahda"
      areaName="Al Nahda"
      subarea="nahda-1"
      subareaName="Nahda 1"
    />
  );
}