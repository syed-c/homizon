import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-investment-park/dip-1'] || {
  title: 'AC Cleaning & Sanitization in DIP 1 - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in DIP 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationDIP1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="dip-1"
      subareaName="DIP 1"
    />
  );
}