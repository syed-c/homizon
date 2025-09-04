import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/international-city/france-cluster'] || {
  title: 'Handyman Services in France Cluster, International City - Professional Services | HOMIZON',
  description: 'Professional handyman services services in France Cluster, International City. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesInternationalCityFranceClusterPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="international-city"
      areaName="International City"
      subArea="france-cluster"
      subAreaName="France Cluster"
    />
  );
}