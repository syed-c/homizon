import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-festival-city/marsa-plaza'] || {
  title: 'AC Cleaning & Sanitization in Marsa Plaza - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Marsa Plaza. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationMarsaPlazaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="marsa-plaza"
      subareaName="Marsa Plaza"
    />
  );
}