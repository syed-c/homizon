import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-quoz/al-quoz-1'] || {
  title: 'Handyman Services in Al Quoz 1, Al Quoz - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Quoz 1, Al Quoz. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlQuozAlQuoz1Page() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-quoz"
      areaName="Al Quoz"
      subArea="al-quoz-1"
      subAreaName="Al Quoz 1"
    />
  );
}