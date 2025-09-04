import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/silicon-central'] || {
  title: 'AC Cleaning & Sanitization in Silicon Central - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Silicon Central. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationSiliconCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="silicon-central"
      areaName="Silicon Central"
    />
  );
}