import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-nahda'] || {
  title: 'Cleaning Services in Al Nahda - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Nahda. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlNahdaPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-nahda"
      areaName="Al Nahda"
    />
  );
}