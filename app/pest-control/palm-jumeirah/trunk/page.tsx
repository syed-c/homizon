import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/palm-jumeirah/trunk'] || {
  title: 'Pest Control in Trunk - Professional Services | HOMIZON',
  description: 'Professional pest control services in Trunk. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlTrunkPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="trunk"
      subareaName="Trunk"
    />
  );
}