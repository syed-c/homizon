import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-karama/karama-residential'] || {
  title: 'Cleaning Services in Karama Residential - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Karama Residential. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesKaramaResidentialPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-karama"
      areaName="Al Karama"
      subarea="karama-residential"
      subareaName="Karama Residential"
    />
  );
}