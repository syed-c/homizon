import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/town-square'] || {
  title: 'Handyman Services in Town Square - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Town Square. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesTownSquarePage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="town-square"
      areaName="Town Square"
      
      
    />
  );
}