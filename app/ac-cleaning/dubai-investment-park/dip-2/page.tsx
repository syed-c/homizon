import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-investment-park/dip-2'] || {
  title: 'AC Cleaning & Sanitization in DIP 2 - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in DIP 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationDIP2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="dip-2"
      subareaName="DIP 2"
    />
  );
}