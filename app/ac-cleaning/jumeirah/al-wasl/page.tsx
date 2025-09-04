import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/jumeirah/al-wasl'] || {
  title: 'AC Cleaning & Sanitization in Al Wasl - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Wasl. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlWaslPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="al-wasl"
      subareaName="Al Wasl"
    />
  );
}