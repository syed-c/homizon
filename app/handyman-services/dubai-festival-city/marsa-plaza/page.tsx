import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/dubai-festival-city/marsa-plaza'] || {
  title: 'Handyman Services in Marsa Plaza, Dubai Festival City - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Marsa Plaza, Dubai Festival City. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesDubaiFestivalCityMarsaPlazaPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subArea="marsa-plaza"
      subAreaName="Marsa Plaza"
    />
  );
}