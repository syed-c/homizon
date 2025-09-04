import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-nahda'] || {
  title: 'Handyman Services in Al Nahda - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Nahda. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlNahdaPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-nahda"
      areaName="Al Nahda"
      
      
    />
  );
}