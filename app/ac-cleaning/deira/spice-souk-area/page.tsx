import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/deira/spice-souk-area'] || {
  title: 'AC Cleaning & Sanitization in Spice Souk Area - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Spice Souk Area. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationSpiceSoukAreaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="deira"
      areaName="Deira"
      subarea="spice-souk-area"
      subareaName="Spice Souk Area"
    />
  );
}