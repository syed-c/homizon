import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/jumeirah/jumeirah-3'] || {
  title: 'Handyman Services in Jumeirah 3, Jumeirah - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Jumeirah 3, Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesJumeirahJumeirah3Page() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="jumeirah"
      areaName="Jumeirah"
      subArea="jumeirah-3"
      subAreaName="Jumeirah 3"
    />
  );
}