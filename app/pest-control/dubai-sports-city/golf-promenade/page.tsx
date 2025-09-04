import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/dubai-sports-city/golf-promenade'] || {
  title: 'Pest Control in Golf Promenade - Professional Services | HOMIZON',
  description: 'Professional pest control services in Golf Promenade. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlGolfPromenadePage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="golf-promenade"
      subareaName="Golf Promenade"
    />
  );
}