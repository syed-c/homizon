import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-mizhar'] || {
  title: 'Handyman Services in Al Mizhar - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Mizhar. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlMizharPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-mizhar"
      areaName="Al Mizhar"
      
      
    />
  );
}