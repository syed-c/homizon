import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-land'] || {
  title: 'AC Cleaning & Sanitization in Dubai Land - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Dubai Land. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationDubaiLandPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-land"
      areaName="Dubai Land"
    />
  );
}