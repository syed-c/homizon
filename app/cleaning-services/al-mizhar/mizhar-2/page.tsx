import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-mizhar/mizhar-2'] || {
  title: 'Cleaning Services in Mizhar 2 - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Mizhar 2. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesMizhar2Page() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-mizhar"
      areaName="Al Mizhar"
      subarea="mizhar-2"
      subareaName="Mizhar 2"
    />
  );
}