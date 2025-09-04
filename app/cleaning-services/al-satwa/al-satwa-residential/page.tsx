import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-satwa/al-satwa-residential'] || {
  title: 'Cleaning Services in Al Satwa Residential - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Satwa Residential. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlSatwaResidentialPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-satwa"
      areaName="Al Satwa"
      subarea="al-satwa-residential"
      subareaName="Al Satwa Residential"
    />
  );
}