import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/palm-jumeirah/frond-c'] || {
  title: 'Bathroom Deep Cleaning in Frond C - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Frond C. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningFrondCPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="frond-c"
      subareaName="Frond C"
    />
  );
}