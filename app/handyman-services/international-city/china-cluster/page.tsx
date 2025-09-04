import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/international-city/china-cluster'] || {
  title: 'Handyman Services in China Cluster, International City - Professional Services | HOMIZON',
  description: 'Professional handyman services services in China Cluster, International City. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesInternationalCityChinaClusterPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="international-city"
      areaName="International City"
      subArea="china-cluster"
      subAreaName="China Cluster"
    />
  );
}