import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/arabian-ranches/mirador'] || {
  title: 'Bathroom Plumbing in Mirador - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Mirador. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingMiradorPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="mirador"
      subareaName="Mirador"
    />
  );
}