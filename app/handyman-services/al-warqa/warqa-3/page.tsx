import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-warqa/warqa-3'] || {
  title: 'Handyman Services in Warqa 3, Al Warqa - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Warqa 3, Al Warqa. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlWarqaWarqa3Page() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-warqa"
      areaName="Al Warqa"
      subArea="warqa-3"
      subAreaName="Warqa 3"
    />
  );
}