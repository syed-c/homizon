import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/bluewaters-island'] || {
  title: 'Handyman Services in Bluewaters Island - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Bluewaters Island. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesBluewatersIslandPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="bluewaters-island"
      areaName="Bluewaters Island"
      
      
    />
  );
}