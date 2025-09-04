import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/discovery-gardens'] || {
  title: 'Cleaning Services in Discovery Gardens - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Discovery Gardens. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesDiscoveryGardensPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="discovery-gardens"
      areaName="Discovery Gardens"
    />
  );
}