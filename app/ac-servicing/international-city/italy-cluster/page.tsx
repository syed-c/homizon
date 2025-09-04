import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/international-city/italy-cluster'] || {
  title: 'AC Servicing in Italy Cluster - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Italy Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingItalyClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="international-city"
      areaName="International City"
      subarea="italy-cluster"
      subareaName="Italy Cluster"
    />
  );
}