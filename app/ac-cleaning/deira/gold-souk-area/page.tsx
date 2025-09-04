import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/deira/gold-souk-area'] || {
  title: 'AC Cleaning & Sanitization in Gold Souk Area - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Gold Souk Area. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationGoldSoukAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="deira"
      areaName="Deira"
      subarea="gold-souk-area"
      subareaName="Gold Souk Area"
    />
  );
}