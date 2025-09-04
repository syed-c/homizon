import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-twar'] || {
  title: 'Handyman Services in Al Twar - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Twar. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlTwarPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-twar"
      areaName="Al Twar"
      
      
    />
  );
}