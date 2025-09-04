import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/palm-jumeirah/trunk'] || {
  title: 'Carpet Cleaning in Trunk - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Trunk. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningTrunkPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="trunk"
      subareaName="Trunk"
    />
  );
}