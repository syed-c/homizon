import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-rashidiya/rashidiya-2'] || {
  title: 'AC Cleaning & Sanitization in Rashidiya 2 - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Rashidiya 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationRashidiya2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-rashidiya"
      areaName="Al Rashidiya"
      subarea="rashidiya-2"
      subareaName="Rashidiya 2"
    />
  );
}