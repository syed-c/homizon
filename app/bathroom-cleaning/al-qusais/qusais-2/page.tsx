import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-qusais/qusais-2'] || {
  title: 'Bathroom Deep Cleaning in Qusais 2 - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Qusais 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningQusais2Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-qusais"
      areaName="Al Qusais"
      subarea="qusais-2"
      subareaName="Qusais 2"
    />
  );
}