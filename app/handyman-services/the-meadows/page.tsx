import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/the-meadows'] || {
  title: 'Handyman Services in The Meadows - Professional Services | HOMIZON',
  description: 'Professional handyman services services in The Meadows. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesTheMeadowsPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="the-meadows"
      areaName="The Meadows"
      
      
    />
  );
}