import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/the-views/golf-tower'] || {
  title: 'Bathroom Plumbing in Golf Tower - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Golf Tower. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingGolfTowerPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="the-views"
      areaName="The Views"
      subarea="golf-tower"
      subareaName="Golf Tower"
    />
  );
}