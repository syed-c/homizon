import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-twar'] || {
  title: 'Cleaning Services in Al Twar - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Twar. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlTwarPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-twar"
      areaName="Al Twar"
    />
  );
}