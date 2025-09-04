import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-satwa'] || {
  title: 'Handyman Services in Al Satwa - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Satwa. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlSatwaPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-satwa"
      areaName="Al Satwa"
      
      
    />
  );
}