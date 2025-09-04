import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-cleaning/jlt/cluster-i'] || {
  title: 'AC Cleaning & Sanitization in Cluster I - Professional Services | HOMIZON',
  description: 'Professional ac cleaning & sanitization services in Cluster I. Verified providers, competitive rates, same-day service available.',
};

export default async function ACCleaningSanitizationClusterIPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-cleaning"
      serviceName="AC Cleaning & Sanitization"
      area="jlt"
      areaName="JLT"
      subarea="cluster-i"
      subareaName="Cluster I"
    />
  );
}