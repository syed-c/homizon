import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/jbr/beach-residence-2'] || {
  title: 'AC Cleaning & Sanitization in Beach Residence 2 - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Beach Residence 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationBeachResidence2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="jbr"
      areaName="JBR"
      subarea="beach-residence-2"
      subareaName="Beach Residence 2"
    />
  );
}