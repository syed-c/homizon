import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/palm-jumeirah/frond-a'] || {
  title: 'Bathroom Deep Cleaning in Frond A - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Frond A. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningFrondAPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="frond-a"
      subareaName="Frond A"
    />
  );
}