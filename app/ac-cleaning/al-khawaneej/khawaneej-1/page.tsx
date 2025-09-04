import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-khawaneej/khawaneej-1'] || {
  title: 'AC Cleaning & Sanitization in Khawaneej 1 - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Khawaneej 1. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationKhawaneej1Page() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-khawaneej"
      areaName="Al Khawaneej"
      subarea="khawaneej-1"
      subareaName="Khawaneej 1"
    />
  );
}