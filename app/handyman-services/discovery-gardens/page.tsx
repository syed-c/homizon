import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/discovery-gardens'] || {
  title: 'Handyman Services in Discovery Gardens - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Discovery Gardens. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDiscoveryGardensPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="discovery-gardens"
      areaName="Discovery Gardens"
      
      
    />
  );
}