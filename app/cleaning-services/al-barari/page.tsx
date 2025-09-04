import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-barari'] || {
  title: 'Cleaning Services in Al Barari - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Barari. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlBarariPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-barari"
      areaName="Al Barari"
    />
  );
}