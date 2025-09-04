import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-qusais/qusais-3'] || {
  title: 'AC Cleaning & Sanitization in Qusais 3 - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Qusais 3. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationQusais3Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-qusais"
      areaName="Al Qusais"
      subarea="qusais-3"
      subareaName="Qusais 3"
    />
  );
}