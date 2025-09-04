import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-satwa/satwa-central'] || {
  title: 'Cleaning Services in Satwa Central - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Satwa Central. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesSatwaCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-satwa"
      areaName="Al Satwa"
      subarea="satwa-central"
      subareaName="Satwa Central"
    />
  );
}