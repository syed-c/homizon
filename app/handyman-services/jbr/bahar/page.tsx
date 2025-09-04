import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/jbr/bahar'] || {
  title: 'Handyman Services in Bahar, JBR - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Bahar, JBR. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesJbrBaharPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="jbr"
      areaName="JBR"
      subArea="bahar"
      subAreaName="Bahar"
    />
  );
}