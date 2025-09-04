import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/the-lakes'] || {
  title: 'Handyman Services in The Lakes - Professional Services | HOMIZON',
  description: 'Professional handyman services services in The Lakes. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesTheLakesPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="the-lakes"
      areaName="The Lakes"
      
      
    />
  );
}