import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/dubai-sports-city/golf-horizon'] || {
  title: 'Pest Control in Golf Horizon - Professional Services | HOMIZON',
  description: 'Professional pest control services in Golf Horizon. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlGolfHorizonPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="golf-horizon"
      subareaName="Golf Horizon"
    />
  );
}