import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jumeirah/al-wasl'] || {
  title: 'Carpet Cleaning in Al Wasl - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Wasl. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlWaslPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="al-wasl"
      subareaName="Al Wasl"
    />
  );
}