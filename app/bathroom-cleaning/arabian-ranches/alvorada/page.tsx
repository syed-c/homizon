import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/arabian-ranches/alvorada'] || {
  title: 'Bathroom Deep Cleaning in Alvorada - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Alvorada. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlvoradaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="alvorada"
      subareaName="Alvorada"
    />
  );
}