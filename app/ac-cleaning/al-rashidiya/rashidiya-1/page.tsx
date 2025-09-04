import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-rashidiya/rashidiya-1'] || {
  title: 'AC Cleaning & Sanitization in Rashidiya 1 - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Rashidiya 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationRashidiya1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-rashidiya"
      areaName="Al Rashidiya"
      subarea="rashidiya-1"
      subareaName="Rashidiya 1"
    />
  );
}