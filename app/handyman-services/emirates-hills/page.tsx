import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/emirates-hills'] || {
  title: 'Handyman Services in Emirates Hills - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Emirates Hills. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesEmiratesHillsPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="emirates-hills"
      areaName="Emirates Hills"
      
      
    />
  );
}