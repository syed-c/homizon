import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-rashidiya'] || {
  title: 'AC Cleaning & Sanitization in Al Rashidiya - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Rashidiya. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlRashidiyaPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-rashidiya"
      areaName="Al Rashidiya"
    />
  );
}