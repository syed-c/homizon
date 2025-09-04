import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-production-city'] || {
  title: 'Handyman Services in Dubai Production City - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Dubai Production City. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiProductionCityPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-production-city"
      areaName="Dubai Production City"
      
      
    />
  );
}