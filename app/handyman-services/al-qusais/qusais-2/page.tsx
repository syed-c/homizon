import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-qusais/qusais-2'] || {
  title: 'Handyman Services in Qusais 2, Al Qusais - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Qusais 2, Al Qusais. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlQusaisQusais2Page() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-qusais"
      areaName="Al Qusais"
      subArea="qusais-2"
      subAreaName="Qusais 2"
    />
  );
}