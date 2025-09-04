import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/silicon-central'] || {
  title: 'Handyman Services in Silicon Central - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Silicon Central. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesSiliconCentralPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="silicon-central"
      areaName="Silicon Central"
      
      
    />
  );
}