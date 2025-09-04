import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/al-quoz'] || {
  title: 'Cleaning Services in Al Quoz - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Quoz. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlQuozPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="al-quoz"
      areaName="Al Quoz"
    />
  );
}