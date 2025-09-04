import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-garhoud/dubai-creek-golf'] || {
  title: 'AC Cleaning & Sanitization in Dubai Creek Golf - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Dubai Creek Golf. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationDubaiCreekGolfPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-garhoud"
      areaName="Al Garhoud"
      subarea="dubai-creek-golf"
      subareaName="Dubai Creek Golf"
    />
  );
}