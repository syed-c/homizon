import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-qusais/qusais-1'] || {
  title: 'Cleaning Services in Qusais 1 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Qusais 1. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesQusais1Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-qusais"
      areaName="Al Qusais"
      subarea="qusais-1"
      subareaName="Qusais 1"
    />
  );
}