import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/the-gardens'] || {
  title: 'Handyman Services in The Gardens - Professional Services | HOMIZON',
  description: 'Professional handyman services services in The Gardens. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesTheGardensPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="the-gardens"
      areaName="The Gardens"
      
      
    />
  );
}