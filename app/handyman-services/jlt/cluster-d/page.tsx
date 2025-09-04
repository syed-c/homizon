import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/jlt/cluster-d'] || {
  title: 'Handyman Services in Cluster D, JLT - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Cluster D, JLT. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesJltClusterDPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="jlt"
      areaName="JLT"
      subArea="cluster-d"
      subAreaName="Cluster D"
    />
  );
}