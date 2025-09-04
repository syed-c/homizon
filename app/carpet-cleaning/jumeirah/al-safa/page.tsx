import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jumeirah/al-safa'] || {
  title: 'Carpet Cleaning in Al Safa - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Safa. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlSafaPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="al-safa"
      subareaName="Al Safa"
    />
  );
}