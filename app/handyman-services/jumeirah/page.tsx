import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/jumeirah'] || {
  title: 'Handyman Services in Jumeirah - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesJumeirahPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="jumeirah"
      areaName="Jumeirah"
      
      
    />
  );
}