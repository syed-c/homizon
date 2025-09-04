import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-islands'] || {
  title: 'Handyman Services in Dubai Islands - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Dubai Islands. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiIslandsPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-islands"
      areaName="Dubai Islands"
      
      
    />
  );
}