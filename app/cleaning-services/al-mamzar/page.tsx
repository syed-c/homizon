import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-mamzar'] || {
  title: 'Cleaning Services in Al Mamzar - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Mamzar. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlMamzarPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-mamzar"
      areaName="Al Mamzar"
    />
  );
}