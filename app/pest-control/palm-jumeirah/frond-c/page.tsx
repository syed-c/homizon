import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/palm-jumeirah/frond-c'] || {
  title: 'Pest Control in Frond C - Professional Services | HOMIZON',
  description: 'Professional pest control services in Frond C. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlFrondCPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="frond-c"
      subareaName="Frond C"
    />
  );
}