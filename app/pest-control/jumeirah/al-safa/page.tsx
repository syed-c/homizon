import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/jumeirah/al-safa'] || {
  title: 'Pest Control in Al Safa - Professional Services | HOMIZON',
  description: 'Professional pest control services in Al Safa. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlAlSafaPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="al-safa"
      subareaName="Al Safa"
    />
  );
}