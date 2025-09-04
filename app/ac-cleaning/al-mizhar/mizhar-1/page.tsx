import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-mizhar/mizhar-1'] || {
  title: 'AC Cleaning & Sanitization in Mizhar 1 - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Mizhar 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationMizhar1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-mizhar"
      areaName="Al Mizhar"
      subarea="mizhar-1"
      subareaName="Mizhar 1"
    />
  );
}