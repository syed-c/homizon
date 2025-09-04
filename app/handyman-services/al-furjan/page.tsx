import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-furjan'] || {
  title: 'Handyman Services in Al Furjan - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Furjan. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlFurjanPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-furjan"
      areaName="Al Furjan"
      
      
    />
  );
}