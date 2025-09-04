import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/the-greens/al-ghaf'] || {
  title: 'Cleaning Services in Al Ghaf - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Al Ghaf. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesAlGhafPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="the-greens"
      areaName="The Greens"
      subarea="al-ghaf"
      subareaName="Al Ghaf"
    />
  );
}