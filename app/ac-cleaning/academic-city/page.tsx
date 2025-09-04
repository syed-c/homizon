import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/academic-city'] || {
  title: 'AC Cleaning & Sanitization in Academic City - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Academic City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAcademicCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="academic-city"
      areaName="Academic City"
    />
  );
}