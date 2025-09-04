import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-investment-park'] || {
  title: 'AC Cleaning & Sanitization in Dubai Investment Park - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Dubai Investment Park. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationDubaiInvestmentParkPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
    />
  );
}