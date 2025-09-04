import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-karama/karama-souk'] || {
  title: 'Bathroom Deep Cleaning in Karama Souk - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Karama Souk. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningKaramaSoukPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-karama"
      areaName="Al Karama"
      subarea="karama-souk"
      subareaName="Karama Souk"
    />
  );
}