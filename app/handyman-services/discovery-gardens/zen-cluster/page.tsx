import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/discovery-gardens/zen-cluster'] || {
  title: 'Handyman Services in Zen Cluster, Discovery Gardens - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Zen Cluster, Discovery Gardens. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDiscoveryGardensZenClusterPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      subArea="zen-cluster"
      subAreaName="Zen Cluster"
    />
  );
}