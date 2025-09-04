import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/appliance-repairs/al-karama/karama-residential'] || {
  title: 'Appliance Repairs in Karama Residential - Professional Services | HOMIZON',
  description: 'Professional appliance repairs services in Karama Residential. Verified providers, competitive rates, same-day service available.',
};

export default async function ApplianceRepairsKaramaResidentialPage() {
  return (
    <ServiceAreaPageContent 
      service="appliance-repairs"
      serviceName="Appliance Repairs"
      area="al-karama"
      areaName="Al Karama"
      subarea="karama-residential"
      subareaName="Karama Residential"
    />
  );
}