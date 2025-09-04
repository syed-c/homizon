import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-karama/karama-residential'] || {
  title: 'Handyman Services in Karama Residential, Al Karama - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Karama Residential, Al Karama. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlKaramaKaramaResidentialPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-karama"
      areaName="Al Karama"
      subArea="karama-residential"
      subAreaName="Karama Residential"
    />
  );
}