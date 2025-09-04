import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/mirdif/ghoroob'] || {
  title: 'Bathroom Plumbing in Ghoroob - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Ghoroob. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingGhoroobPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="mirdif"
      areaName="Mirdif"
      subarea="ghoroob"
      subareaName="Ghoroob"
    />
  );
}