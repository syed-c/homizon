import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-karama/karama-residential'] || {
  title: 'Carpet Cleaning in Karama Residential - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Karama Residential. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningKaramaResidentialPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-karama"
      areaName="Al Karama"
      subarea="karama-residential"
      subareaName="Karama Residential"
    />
  );
}