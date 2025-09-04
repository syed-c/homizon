import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/arabian-ranches/alvorada'] || {
  title: 'Carpet Cleaning in Alvorada - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Alvorada. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlvoradaPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="alvorada"
      subareaName="Alvorada"
    />
  );
}