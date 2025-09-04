import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-mamzar'] || {
  title: 'AC Cleaning & Sanitization in Al Mamzar - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Mamzar. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlMamzarPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-mamzar"
      areaName="Al Mamzar"
    />
  );
}