import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/dubai-knowledge-park'] || {
  title: 'AC Cleaning & Sanitization in Dubai Knowledge Park - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Dubai Knowledge Park. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationDubaiKnowledgeParkPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="dubai-knowledge-park"
      areaName="Dubai Knowledge Park"
    />
  );
}