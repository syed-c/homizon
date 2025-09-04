import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-qusais'] || {
  title: 'Handyman Services in Al Qusais - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Qusais. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlQusaisPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-qusais"
      areaName="Al Qusais"
      
      
    />
  );
}