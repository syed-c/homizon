import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/arabian-ranches/savannah'] || {
  title: 'Cleaning Services in Savannah - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Savannah. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesSavannahPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="savannah"
      subareaName="Savannah"
    />
  );
}