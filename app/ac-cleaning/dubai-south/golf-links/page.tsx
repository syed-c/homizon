import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-south/golf-links'] || {
  title: 'AC Cleaning & Sanitization in Golf Links - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Golf Links. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationGolfLinksPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-south"
      areaName="Dubai South"
      subarea="golf-links"
      subareaName="Golf Links"
    />
  );
}