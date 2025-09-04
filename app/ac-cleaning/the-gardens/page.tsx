import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/the-gardens'] || {
  title: 'AC Cleaning & Sanitization in The Gardens - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in The Gardens. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationTheGardensPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="the-gardens"
      areaName="The Gardens"
    />
  );
}