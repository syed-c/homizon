import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-mizhar'] || {
  title: 'AC Cleaning & Sanitization in Al Mizhar - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Mizhar. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlMizharPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-mizhar"
      areaName="Al Mizhar"
    />
  );
}