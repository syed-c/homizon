import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-mamzar'] || {
  title: 'Handyman Services in Al Mamzar - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Mamzar. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlMamzarPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-mamzar"
      areaName="Al Mamzar"
      
      
    />
  );
}