import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-sports-city/golf-horizon'] || {
  title: 'Bathroom Deep Cleaning in Golf Horizon - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Golf Horizon. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningGolfHorizonPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="golf-horizon"
      subareaName="Golf Horizon"
    />
  );
}