import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/town-square'] || {
  title: 'Bathroom Plumbing in Town Square - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Town Square. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingTownSquarePage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="town-square"
      areaName="Town Square"
    />
  );
}