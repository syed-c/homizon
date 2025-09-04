import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/jumeirah/jumeirah-2'] || {
  title: 'Handyman Services in Jumeirah 2, Jumeirah - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Jumeirah 2, Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesJumeirahJumeirah2Page() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="jumeirah"
      areaName="Jumeirah"
      subArea="jumeirah-2"
      subAreaName="Jumeirah 2"
    />
  );
}