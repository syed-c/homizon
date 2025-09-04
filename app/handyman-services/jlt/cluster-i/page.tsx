import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/jlt/cluster-i'] || {
  title: 'Handyman Services in Cluster I, JLT - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Cluster I, JLT. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesJltClusterIPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="jlt"
      areaName="JLT"
      subArea="cluster-i"
      subAreaName="Cluster I"
    />
  );
}