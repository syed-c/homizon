import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-karama/karama-souk'] || {
  title: 'Cleaning Services in Karama Souk - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Karama Souk. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesKaramaSoukPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-karama"
      areaName="Al Karama"
      subarea="karama-souk"
      subareaName="Karama Souk"
    />
  );
}