import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/silicon-oasis/silicon-gates'] || {
  title: 'AC Cleaning & Sanitization in Silicon Gates - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Silicon Gates. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationSiliconGatesPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="silicon-oasis"
      areaName="Silicon Oasis"
      subarea="silicon-gates"
      subareaName="Silicon Gates"
    />
  );
}