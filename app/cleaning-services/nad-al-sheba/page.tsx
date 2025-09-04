import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/nad-al-sheba'] || {
  title: 'Cleaning Services in Nad Al Sheba - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Nad Al Sheba. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesNadAlShebaPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="nad-al-sheba"
      areaName="Nad Al Sheba"
    />
  );
}