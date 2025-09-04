import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-mizhar'] || {
  title: 'Cleaning Services in Al Mizhar - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Mizhar. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlMizharPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-mizhar"
      areaName="Al Mizhar"
    />
  );
}