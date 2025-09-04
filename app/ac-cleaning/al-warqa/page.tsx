import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-warqa'] || {
  title: 'AC Cleaning & Sanitization in Al Warqa - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Warqa. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlWarqaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-warqa"
      areaName="Al Warqa"
    />
  );
}