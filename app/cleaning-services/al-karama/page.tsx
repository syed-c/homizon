import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-karama'] || {
  title: 'Cleaning Services in Al Karama - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Karama. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlKaramaPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-karama"
      areaName="Al Karama"
    />
  );
}