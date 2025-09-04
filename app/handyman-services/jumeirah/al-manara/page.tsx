import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from '@/app/[service]/[area]/service-area-page-client';

export const metadata: Metadata = siteMetadata['/handyman-services/jumeirah/al-manara'] || {
  title: 'Handyman Services in Al Manara, Jumeirah - Professional Services | HOMIZON',
  description: 'Professional handyman services services in Al Manara, Jumeirah. Verified providers, competitive rates, same-day service available.',
};

export default async function HandymanServicesJumeirahAlManaraPage() {
  return (
    <ServiceAreaPageClient 
      service="handyman-services"
      serviceName="Handyman Services"
      area="jumeirah"
      areaName="Jumeirah"
      subArea="al-manara"
      subAreaName="Al Manara"
    />
  );
}