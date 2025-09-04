import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-karama/karama-souk'] || {
  title: 'Carpet Cleaning in Karama Souk - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Karama Souk. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningKaramaSoukPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-karama"
      areaName="Al Karama"
      subarea="karama-souk"
      subareaName="Karama Souk"
    />
  );
}