import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/jbr'] || {
  title: 'Handyman Services in JBR - Professional Services | HOMIZON',
  description: 'Professional handyman services services in JBR. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesJbrPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="jbr"
      areaName="JBR"
      
      
    />
  );
}