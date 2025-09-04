import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/mirdif/mirdif-hills'] || {
  title: 'AC Cleaning & Sanitization in Mirdif Hills - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Mirdif Hills. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationMirdifHillsPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="mirdif"
      areaName="Mirdif"
      subarea="mirdif-hills"
      subareaName="Mirdif Hills"
    />
  );
}