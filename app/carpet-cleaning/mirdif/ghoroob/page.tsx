import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/mirdif/ghoroob'] || {
  title: 'Carpet Cleaning in Ghoroob - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Ghoroob. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningGhoroobPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="mirdif"
      areaName="Mirdif"
      subarea="ghoroob"
      subareaName="Ghoroob"
    />
  );
}