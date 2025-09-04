import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/bur-dubai/meena-bazaar'] || {
  title: 'AC Cleaning & Sanitization in Meena Bazaar - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Meena Bazaar. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationMeenaBazaarPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="meena-bazaar"
      subareaName="Meena Bazaar"
    />
  );
}