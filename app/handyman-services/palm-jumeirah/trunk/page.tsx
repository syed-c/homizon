import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/palm-jumeirah/trunk'] || {
  title: 'Handyman Services in Trunk, Palm Jumeirah - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Trunk, Palm Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesPalmJumeirahTrunkPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subArea="trunk"
      subAreaName="Trunk"
    />
  );
}