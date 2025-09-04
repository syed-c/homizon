import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/discovery-gardens'] || {
  title: 'Bathroom Plumbing in Discovery Gardens - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Discovery Gardens. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingDiscoveryGardensPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="discovery-gardens"
      areaName="Discovery Gardens"
    />
  );
}