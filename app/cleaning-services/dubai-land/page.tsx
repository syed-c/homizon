import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-land'] || {
  title: 'Cleaning Services in Dubai Land - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Dubai Land. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesDubaiLandPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-land"
      areaName="Dubai Land"
    />
  );
}