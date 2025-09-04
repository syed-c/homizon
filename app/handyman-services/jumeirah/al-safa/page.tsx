import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/jumeirah/al-safa'] || {
  title: 'Handyman Services in Al Safa, Jumeirah - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Safa, Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesJumeirahAlSafaPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="jumeirah"
      areaName="Jumeirah"
      subArea="al-safa"
      subAreaName="Al Safa"
    />
  );
}