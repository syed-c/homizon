import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/jumeirah/jumeirah-1'] || {
  title: 'Carpet Cleaning in Jumeirah 1 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Jumeirah 1. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningJumeirah1Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="jumeirah-1"
      subareaName="Jumeirah 1"
    />
  );
}