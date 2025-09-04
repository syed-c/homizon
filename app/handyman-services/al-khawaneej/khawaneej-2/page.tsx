import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-khawaneej/khawaneej-2'] || {
  title: 'Handyman Services in Khawaneej 2, Al Khawaneej - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Khawaneej 2, Al Khawaneej. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlKhawaneejKhawaneej2Page() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-khawaneej"
      areaName="Al Khawaneej"
      subArea="khawaneej-2"
      subAreaName="Khawaneej 2"
    />
  );
}