import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-rashidiya/rashidiya-2'] || {
  title: 'Cleaning Services in Rashidiya 2 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Rashidiya 2. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesRashidiya2Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-rashidiya"
      areaName="Al Rashidiya"
      subarea="rashidiya-2"
      subareaName="Rashidiya 2"
    />
  );
}