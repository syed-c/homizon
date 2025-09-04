import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/bur-dubai/meena-bazaar'] || {
  title: 'Cleaning Services in Meena Bazaar - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Meena Bazaar. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesMeenaBazaarPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="meena-bazaar"
      subareaName="Meena Bazaar"
    />
  );
}