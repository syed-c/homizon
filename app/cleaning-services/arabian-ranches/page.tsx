import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/arabian-ranches'] || {
  title: 'Cleaning Services in Arabian Ranches - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Arabian Ranches. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesArabianRanchesPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="arabian-ranches"
      areaName="Arabian Ranches"
    />
  );
}