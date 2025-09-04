import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/international-city/france-cluster'] || {
  title: 'AC Cleaning & Sanitization in France Cluster - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in France Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationFranceClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="international-city"
      areaName="International City"
      subarea="france-cluster"
      subareaName="France Cluster"
    />
  );
}