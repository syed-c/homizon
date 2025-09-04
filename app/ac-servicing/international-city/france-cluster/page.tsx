import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/international-city/france-cluster'] || {
  title: 'AC Servicing in France Cluster - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in France Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingFranceClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="international-city"
      areaName="International City"
      subarea="france-cluster"
      subareaName="France Cluster"
    />
  );
}