import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/al-warqa/warqa-1'] || {
  title: 'Handyman Services in Warqa 1, Al Warqa - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Warqa 1, Al Warqa. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesAlWarqaWarqa1Page() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="al-warqa"
      areaName="Al Warqa"
      subArea="warqa-1"
      subAreaName="Warqa 1"
    />
  );
}