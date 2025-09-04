import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/downtown-dubai/old-town-dubai'] || {
  title: 'AC Cleaning & Sanitization in Old Town Dubai - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Old Town Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationOldTownDubaiPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="downtown-dubai"
      areaName="Downtown Dubai"
      subarea="old-town-dubai"
      subareaName="Old Town Dubai"
    />
  );
}