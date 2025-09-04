import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/the-lakes'] || {
  title: 'AC Cleaning & Sanitization in The Lakes - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in The Lakes. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationTheLakesPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="the-lakes"
      areaName="The Lakes"
    />
  );
}