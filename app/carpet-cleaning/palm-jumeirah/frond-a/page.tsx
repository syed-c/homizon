import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/palm-jumeirah/frond-a'] || {
  title: 'Carpet Cleaning in Frond A - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Frond A. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningFrondAPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="palm-jumeirah"
      areaName="Palm Jumeirah"
      subarea="frond-a"
      subareaName="Frond A"
    />
  );
}