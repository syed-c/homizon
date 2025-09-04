import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/jlt/cluster-b'] || {
  title: 'Handyman Services in Cluster B, JLT - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Cluster B, JLT. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesJltClusterBPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="jlt"
      areaName="JLT"
      subArea="cluster-b"
      subAreaName="Cluster B"
    />
  );
}