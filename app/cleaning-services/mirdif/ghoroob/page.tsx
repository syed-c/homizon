import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/mirdif/ghoroob'] || {
  title: 'Cleaning Services in Ghoroob - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Ghoroob. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesGhoroobPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="mirdif"
      areaName="Mirdif"
      subarea="ghoroob"
      subareaName="Ghoroob"
    />
  );
}