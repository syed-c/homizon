import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/bur-dubai/textile-souk'] || {
  title: 'AC Cleaning & Sanitization in Textile Souk - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Textile Souk. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationTextileSoukPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="textile-souk"
      subareaName="Textile Souk"
    />
  );
}