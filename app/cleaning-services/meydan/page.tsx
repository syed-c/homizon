import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/meydan'] || {
  title: 'Cleaning Services in Meydan - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Meydan. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesMeydanPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="meydan"
      areaName="Meydan"
    />
  );
}