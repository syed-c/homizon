import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-khawaneej'] || {
  title: 'Handyman Services in Al Khawaneej - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Khawaneej. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlKhawaneejPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-khawaneej"
      areaName="Al Khawaneej"
      
      
    />
  );
}