import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/mirdif/ghoroob'] || {
  title: 'AC Cleaning & Sanitization in Ghoroob - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Ghoroob. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationGhoroobPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="mirdif"
      areaName="Mirdif"
      subarea="ghoroob"
      subareaName="Ghoroob"
    />
  );
}