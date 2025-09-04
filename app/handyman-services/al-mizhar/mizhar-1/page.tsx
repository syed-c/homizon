import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-mizhar/mizhar-1'] || {
  title: 'Handyman Services in Mizhar 1, Al Mizhar - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Mizhar 1, Al Mizhar. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlMizharMizhar1Page() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-mizhar"
      areaName="Al Mizhar"
      subArea="mizhar-1"
      subAreaName="Mizhar 1"
    />
  );
}