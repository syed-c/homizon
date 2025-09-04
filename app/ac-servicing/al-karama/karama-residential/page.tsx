import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/al-karama/karama-residential'] || {
  title: 'AC Servicing in Karama Residential - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Karama Residential. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingKaramaResidentialPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="al-karama"
      areaName="Al Karama"
      subarea="karama-residential"
      subareaName="Karama Residential"
    />
  );
}