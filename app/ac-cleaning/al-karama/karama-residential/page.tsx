import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-karama/karama-residential'] || {
  title: 'AC Cleaning & Sanitization in Karama Residential - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Karama Residential. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationKaramaResidentialPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-karama"
      areaName="Al Karama"
      subarea="karama-residential"
      subareaName="Karama Residential"
    />
  );
}