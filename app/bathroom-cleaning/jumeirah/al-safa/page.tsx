import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/jumeirah/al-safa'] || {
  title: 'Bathroom Deep Cleaning in Al Safa - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Safa. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlSafaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="al-safa"
      subareaName="Al Safa"
    />
  );
}