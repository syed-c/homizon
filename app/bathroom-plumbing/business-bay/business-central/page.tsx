import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/business-bay/business-central'] || {
  title: 'Bathroom Plumbing in Business Central - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Business Central. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingBusinessCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="business-bay"
      areaName="Business Bay"
      subarea="business-central"
      subareaName="Business Central"
    />
  );
}