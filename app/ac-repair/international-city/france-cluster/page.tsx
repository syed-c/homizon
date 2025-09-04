import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-repair/international-city/france-cluster'] || {
  title: 'AC Repair & Maintenance in France Cluster - Professional Services | HOMIZON',
  description: 'Professional ac repair & maintenance services in France Cluster. Verified providers, competitive rates, same-day service available.',
};

export default async function ACRepairMaintenanceFranceClusterPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-repair"
      serviceName="AC Repair & Maintenance"
      area="international-city"
      areaName="International City"
      subarea="france-cluster"
      subareaName="France Cluster"
    />
  );
}