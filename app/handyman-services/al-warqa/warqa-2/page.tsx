import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-warqa/warqa-2'] || {
  title: 'Handyman Services in Warqa 2, Al Warqa - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Warqa 2, Al Warqa. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlWarqaWarqa2Page() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-warqa"
      areaName="Al Warqa"
      subArea="warqa-2"
      subAreaName="Warqa 2"
    />
  );
}