import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/jumeirah/al-manara'] || {
  title: 'Cleaning Services in Al Manara - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Manara. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlManaraPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="jumeirah"
      areaName="Jumeirah"
      subarea="al-manara"
      subareaName="Al Manara"
    />
  );
}