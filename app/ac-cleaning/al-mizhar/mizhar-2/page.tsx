import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-mizhar/mizhar-2'] || {
  title: 'AC Cleaning & Sanitization in Mizhar 2 - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Mizhar 2. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationMizhar2Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-mizhar"
      areaName="Al Mizhar"
      subarea="mizhar-2"
      subareaName="Mizhar 2"
    />
  );
}