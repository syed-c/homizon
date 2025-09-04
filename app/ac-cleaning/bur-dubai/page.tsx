import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/bur-dubai'] || {
  title: 'AC Cleaning & Sanitization in Bur Dubai - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Bur Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationBurDubaiPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="bur-dubai"
      areaName="Bur Dubai"
    />
  );
}