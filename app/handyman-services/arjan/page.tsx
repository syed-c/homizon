import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/arjan'] || {
  title: 'Handyman Services in Arjan - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Arjan. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesArjanPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="arjan"
      areaName="Arjan"
      
      
    />
  );
}