import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/palm-jumeirah/atlantis-area'] || {
  title: 'Handyman Services in Atlantis Area, Palm Jumeirah - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Atlantis Area, Palm Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesPalmJumeirahAtlantisAreaPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subArea="atlantis-area"
      subAreaName="Atlantis Area"
    />
  );
}