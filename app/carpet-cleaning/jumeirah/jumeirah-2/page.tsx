import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jumeirah/jumeirah-2'] || {
  title: 'Carpet Cleaning in Jumeirah 2 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Jumeirah 2. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningJumeirah2Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="jumeirah-2"
      subareaName="Jumeirah 2"
    />
  );
}