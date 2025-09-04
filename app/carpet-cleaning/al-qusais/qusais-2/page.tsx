import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-qusais/qusais-2'] || {
  title: 'Carpet Cleaning in Qusais 2 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Qusais 2. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningQusais2Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-qusais"
      areaName="Al Qusais"
      subarea="qusais-2"
      subareaName="Qusais 2"
    />
  );
}