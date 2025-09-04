import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-mizhar/mizhar-2'] || {
  title: 'Bathroom Plumbing in Mizhar 2 - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Mizhar 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingMizhar2Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-mizhar"
      areaName="Al Mizhar"
      subarea="mizhar-2"
      subareaName="Mizhar 2"
    />
  );
}