import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/palm-jumeirah/frond-a'] || {
  title: 'Handyman Services in Frond A, Palm Jumeirah - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Frond A, Palm Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesPalmJumeirahFrondAPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subArea="frond-a"
      subAreaName="Frond A"
    />
  );
}