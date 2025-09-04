import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-quoz'] || {
  title: 'AC Cleaning & Sanitization in Al Quoz - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Quoz. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlQuozPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-quoz"
      areaName="Al Quoz"
    />
  );
}