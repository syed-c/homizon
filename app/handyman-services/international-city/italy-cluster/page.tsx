import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/international-city/italy-cluster'] || {
  title: 'Handyman Services in Italy Cluster, International City - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Italy Cluster, International City. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesInternationalCityItalyClusterPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="international-city"
      areaName="International City"
      subArea="italy-cluster"
      subAreaName="Italy Cluster"
    />
  );
}