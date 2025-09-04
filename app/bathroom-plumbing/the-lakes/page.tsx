import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/the-lakes'] || {
  title: 'Bathroom Plumbing in The Lakes - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in The Lakes. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingTheLakesPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="the-lakes"
      areaName="The Lakes"
    />
  );
}