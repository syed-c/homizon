import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-warqa/warqa-3'] || {
  title: 'Carpet Cleaning in Warqa 3 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Warqa 3. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningWarqa3Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-warqa"
      areaName="Al Warqa"
      subarea="warqa-3"
      subareaName="Warqa 3"
    />
  );
}