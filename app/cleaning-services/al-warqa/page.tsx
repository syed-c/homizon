import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-warqa'] || {
  title: 'Cleaning Services in Al Warqa - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Warqa. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlWarqaPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-warqa"
      areaName="Al Warqa"
    />
  );
}