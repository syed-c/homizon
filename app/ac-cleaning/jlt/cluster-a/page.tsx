import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/jlt/cluster-a'] || {
  title: 'AC Cleaning & Sanitization in Cluster A - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Cluster A. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationClusterAPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="jlt"
      areaName="JLT"
      subarea="cluster-a"
      subareaName="Cluster A"
    />
  );
}