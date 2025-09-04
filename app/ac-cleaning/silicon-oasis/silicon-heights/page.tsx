import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/silicon-oasis/silicon-heights'] || {
  title: 'AC Cleaning & Sanitization in Silicon Heights - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Silicon Heights. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationSiliconHeightsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-heights"
      subareaName="Silicon Heights"
    />
  );
}