import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-khawaneej/khawaneej-1'] || {
  title: 'Handyman Services in Khawaneej 1, Al Khawaneej - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Khawaneej 1, Al Khawaneej. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlKhawaneejKhawaneej1Page() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-khawaneej"
      areaName="Al Khawaneej"
      subArea="khawaneej-1"
      subAreaName="Khawaneej 1"
    />
  );
}