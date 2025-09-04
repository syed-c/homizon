import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-barsha/al-barsha-heights'] || {
  title: 'AC Cleaning & Sanitization in Al Barsha Heights - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Barsha Heights. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlBarshaHeightsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-heights"
      subareaName="Al Barsha Heights"
    />
  );
}