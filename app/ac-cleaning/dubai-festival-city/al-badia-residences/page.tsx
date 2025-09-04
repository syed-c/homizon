import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-festival-city/al-badia-residences'] || {
  title: 'AC Cleaning & Sanitization in Al Badia Residences - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Badia Residences. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlBadiaResidencesPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="al-badia-residences"
      subareaName="Al Badia Residences"
    />
  );
}