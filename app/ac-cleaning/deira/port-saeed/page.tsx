import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/deira/port-saeed'] || {
  title: 'AC Cleaning & Sanitization in Port Saeed - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Port Saeed. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationPortSaeedPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="deira"
      areaName="Deira"
      subarea="port-saeed"
      subareaName="Port Saeed"
    />
  );
}