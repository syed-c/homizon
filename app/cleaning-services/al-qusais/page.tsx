import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-qusais'] || {
  title: 'Cleaning Services in Al Qusais - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Qusais. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlQusaisPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-qusais"
      areaName="Al Qusais"
    />
  );
}