import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/discovery-gardens/mediterranean-cluster'] || {
  title: 'AC Servicing in Mediterranean Cluster - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Mediterranean Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingMediterraneanClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      subarea="mediterranean-cluster"
      subareaName="Mediterranean Cluster"
    />
  );
}