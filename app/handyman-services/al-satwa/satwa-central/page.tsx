import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-satwa/satwa-central'] || {
  title: 'Handyman Services in Satwa Central, Al Satwa - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Satwa Central, Al Satwa. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlSatwaSatwaCentralPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-satwa"
      areaName="Al Satwa"
      subArea="satwa-central"
      subAreaName="Satwa Central"
    />
  );
}