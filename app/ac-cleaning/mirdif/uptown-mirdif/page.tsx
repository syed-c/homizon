import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/mirdif/uptown-mirdif'] || {
  title: 'AC Cleaning & Sanitization in Uptown Mirdif - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Uptown Mirdif. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationUptownMirdifPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="mirdif"
      areaName="Mirdif"
      subarea="uptown-mirdif"
      subareaName="Uptown Mirdif"
    />
  );
}