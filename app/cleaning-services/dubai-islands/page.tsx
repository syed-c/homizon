import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-islands'] || {
  title: 'Cleaning Services in Dubai Islands - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Dubai Islands. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesDubaiIslandsPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-islands"
      areaName="Dubai Islands"
    />
  );
}