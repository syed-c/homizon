import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-qusais/qusais-3'] || {
  title: 'Handyman Services in Qusais 3, Al Qusais - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Qusais 3, Al Qusais. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlQusaisQusais3Page() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-qusais"
      areaName="Al Qusais"
      subArea="qusais-3"
      subAreaName="Qusais 3"
    />
  );
}