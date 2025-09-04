import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-sufouh'] || {
  title: 'Handyman Services in Al Sufouh - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Sufouh. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlSufouhPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-sufouh"
      areaName="Al Sufouh"
      
      
    />
  );
}