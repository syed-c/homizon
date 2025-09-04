import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/deira/port-saeed'] || {
  title: 'Cleaning Services in Port Saeed - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Port Saeed. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesPortSaeedPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="deira"
      areaName="Deira"
      subarea="port-saeed"
      subareaName="Port Saeed"
    />
  );
}