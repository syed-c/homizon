import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/jvc'] || {
  title: 'Handyman Services in JVC - Professional Services | HOMIZON',
  description: 'Professional handyman services services in JVC. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesJvcPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="jvc"
      areaName="JVC"
      
      
    />
  );
}