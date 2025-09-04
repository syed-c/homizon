import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/bur-dubai'] || {
  title: 'Cleaning Services in Bur Dubai - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Bur Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesBurDubaiPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="bur-dubai"
      areaName="Bur Dubai"
    />
  );
}