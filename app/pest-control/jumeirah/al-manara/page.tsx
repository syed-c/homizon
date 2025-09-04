import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/jumeirah/al-manara'] || {
  title: 'Pest Control in Al Manara - Professional Services | HOMIZON',
  description: 'Professional pest control services in Al Manara. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlAlManaraPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="al-manara"
      subareaName="Al Manara"
    />
  );
}