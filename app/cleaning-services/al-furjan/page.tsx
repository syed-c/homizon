import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-furjan'] || {
  title: 'Cleaning Services in Al Furjan - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Furjan. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlFurjanPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-furjan"
      areaName="Al Furjan"
    />
  );
}