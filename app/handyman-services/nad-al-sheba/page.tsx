import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/nad-al-sheba'] || {
  title: 'Handyman Services in Nad Al Sheba - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Nad Al Sheba. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesNadAlShebaPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="nad-al-sheba"
      areaName="Nad Al Sheba"
      
      
    />
  );
}