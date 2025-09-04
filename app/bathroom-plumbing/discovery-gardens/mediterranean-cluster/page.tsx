import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/discovery-gardens/mediterranean-cluster'] || {
  title: 'Bathroom Plumbing in Mediterranean Cluster - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Mediterranean Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingMediterraneanClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      subarea="mediterranean-cluster"
      subareaName="Mediterranean Cluster"
    />
  );
}