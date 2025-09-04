import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-nahda/nahda-2'] || {
  title: 'Handyman Services in Nahda 2, Al Nahda - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Nahda 2, Al Nahda. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlNahdaNahda2Page() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-nahda"
      areaName="Al Nahda"
      subArea="nahda-2"
      subAreaName="Nahda 2"
    />
  );
}