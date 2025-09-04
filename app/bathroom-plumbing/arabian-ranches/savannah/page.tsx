import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/arabian-ranches/savannah'] || {
  title: 'Bathroom Plumbing in Savannah - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Savannah. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingSavannahPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="savannah"
      subareaName="Savannah"
    />
  );
}