import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/jumeirah/al-manara'] || {
  title: 'AC Cleaning & Sanitization in Al Manara - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Manara. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlManaraPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="al-manara"
      subareaName="Al Manara"
    />
  );
}