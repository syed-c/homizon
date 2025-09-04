import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/arabian-ranches/alvorada'] || {
  title: 'Cleaning Services in Alvorada - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Alvorada. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlvoradaPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="alvorada"
      subareaName="Alvorada"
    />
  );
}