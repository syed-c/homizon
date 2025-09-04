import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/meydan'] || {
  title: 'Handyman Services in Meydan - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Meydan. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesMeydanPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="meydan"
      areaName="Meydan"
      
      
    />
  );
}