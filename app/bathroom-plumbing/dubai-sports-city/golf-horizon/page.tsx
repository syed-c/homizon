import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-sports-city/golf-horizon'] || {
  title: 'Bathroom Plumbing in Golf Horizon - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Golf Horizon. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingGolfHorizonPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="golf-horizon"
      subareaName="Golf Horizon"
    />
  );
}