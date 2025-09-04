import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-rashidiya/rashidiya-1'] || {
  title: 'Cleaning Services in Rashidiya 1 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Rashidiya 1. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesRashidiya1Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-rashidiya"
      areaName="Al Rashidiya"
      subarea="rashidiya-1"
      subareaName="Rashidiya 1"
    />
  );
}