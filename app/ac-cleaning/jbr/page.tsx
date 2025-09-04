import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/jbr'] || {
  title: 'AC Cleaning & Sanitization in JBR - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in JBR. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationJBRPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="jbr"
      areaName="JBR"
    />
  );
}