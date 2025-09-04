import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/jumeirah/al-wasl'] || {
  title: 'Handyman Services in Al Wasl, Jumeirah - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Wasl, Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesJumeirahAlWaslPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="jumeirah"
      areaName="Jumeirah"
      subArea="al-wasl"
      subAreaName="Al Wasl"
    />
  );
}