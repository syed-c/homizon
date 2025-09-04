import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/business-bay/executive-bay'] || {
  title: 'Bathroom Plumbing in Executive Bay - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Executive Bay. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingExecutiveBayPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="business-bay"
      areaName="Business Bay"
      subarea="executive-bay"
      subareaName="Executive Bay"
    />
  );
}