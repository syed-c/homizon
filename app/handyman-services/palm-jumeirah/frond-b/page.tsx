import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/palm-jumeirah/frond-b'] || {
  title: 'Handyman Services in Frond B, Palm Jumeirah - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Frond B, Palm Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesPalmJumeirahFrondBPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subArea="frond-b"
      subAreaName="Frond B"
    />
  );
}