import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/town-square'] || {
  title: 'AC Cleaning & Sanitization in Town Square - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Town Square. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationTownSquarePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="town-square"
      areaName="Town Square"
    />
  );
}