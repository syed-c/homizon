import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/discovery-gardens/mogul-cluster'] || {
  title: 'AC Cleaning & Sanitization in Mogul Cluster - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Mogul Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationMogulClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      subarea="mogul-cluster"
      subareaName="Mogul Cluster"
    />
  );
}