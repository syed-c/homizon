import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jumeirah/jumeirah-3'] || {
  title: 'Carpet Cleaning in Jumeirah 3 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Jumeirah 3. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningJumeirah3Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="jumeirah-3"
      subareaName="Jumeirah 3"
    />
  );
}