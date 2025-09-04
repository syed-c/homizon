import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/the-greens/al-ghaf'] || {
  title: 'AC Cleaning & Sanitization in Al Ghaf - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Ghaf. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlGhafPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="the-greens"
      areaName="The Greens"
      subarea="al-ghaf"
      subareaName="Al Ghaf"
    />
  );
}