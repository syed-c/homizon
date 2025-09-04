import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-karama/karama-souk'] || {
  title: 'AC Cleaning & Sanitization in Karama Souk - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Karama Souk. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationKaramaSoukPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-karama"
      areaName="Al Karama"
      subarea="karama-souk"
      subareaName="Karama Souk"
    />
  );
}