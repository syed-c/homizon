import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/al-satwa/al-satwa-residential'] || {
  title: 'AC Cleaning & Sanitization in Al Satwa Residential - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Al Satwa Residential. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationAlSatwaResidentialPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="al-satwa"
      areaName="Al Satwa"
      subarea="al-satwa-residential"
      subareaName="Al Satwa Residential"
    />
  );
}