import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-sports-city/golf-promenade'] || {
  title: 'Bathroom Plumbing in Golf Promenade - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Golf Promenade. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingGolfPromenadePage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="golf-promenade"
      subareaName="Golf Promenade"
    />
  );
}