import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-garhoud'] || {
  title: 'Cleaning Services in Al Garhoud - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Garhoud. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlGarhoudPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-garhoud"
      areaName="Al Garhoud"
    />
  );
}