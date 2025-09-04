import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-twar/twar-2'] || {
  title: 'Handyman Services in Twar 2, Al Twar - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Twar 2, Al Twar. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlTwarTwar2Page() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-twar"
      areaName="Al Twar"
      subArea="twar-2"
      subAreaName="Twar 2"
    />
  );
}