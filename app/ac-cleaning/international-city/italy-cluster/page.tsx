import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/international-city/italy-cluster'] || {
  title: 'AC Cleaning & Sanitization in Italy Cluster - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Italy Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationItalyClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="international-city"
      areaName="International City"
      subarea="italy-cluster"
      subareaName="Italy Cluster"
    />
  );
}