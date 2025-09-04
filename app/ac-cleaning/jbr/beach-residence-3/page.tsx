import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/jbr/beach-residence-3'] || {
  title: 'AC Cleaning & Sanitization in Beach Residence 3 - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Beach Residence 3. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationBeachResidence3Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="jbr"
      areaName="JBR"
      subarea="beach-residence-3"
      subareaName="Beach Residence 3"
    />
  );
}