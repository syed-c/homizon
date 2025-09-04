import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-mizhar/mizhar-2'] || {
  title: 'Handyman Services in Mizhar 2, Al Mizhar - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Mizhar 2, Al Mizhar. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlMizharMizhar2Page() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-mizhar"
      areaName="Al Mizhar"
      subArea="mizhar-2"
      subAreaName="Mizhar 2"
    />
  );
}