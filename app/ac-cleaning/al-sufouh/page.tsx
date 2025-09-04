import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-sufouh'] || {
  title: 'AC Cleaning & Sanitization in Al Sufouh - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Sufouh. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlSufouhPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-sufouh"
      areaName="Al Sufouh"
    />
  );
}