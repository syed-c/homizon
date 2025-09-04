import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-warqa'] || {
  title: 'Handyman Services in Al Warqa - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Warqa. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlWarqaPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-warqa"
      areaName="Al Warqa"
      
      
    />
  );
}