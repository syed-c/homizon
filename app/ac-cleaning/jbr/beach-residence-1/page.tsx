import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/jbr/beach-residence-1'] || {
  title: 'AC Cleaning & Sanitization in Beach Residence 1 - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Beach Residence 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationBeachResidence1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="jbr"
      areaName="JBR"
      subarea="beach-residence-1"
      subareaName="Beach Residence 1"
    />
  );
}