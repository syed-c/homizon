import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/deira'] || {
  title: 'Handyman Services in Deira - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Deira. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDeiraPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="deira"
      areaName="Deira"
      
      
    />
  );
}