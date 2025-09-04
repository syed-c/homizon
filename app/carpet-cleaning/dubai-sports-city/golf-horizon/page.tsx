import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-sports-city/golf-horizon'] || {
  title: 'Carpet Cleaning in Golf Horizon - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Golf Horizon. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningGolfHorizonPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="golf-horizon"
      subareaName="Golf Horizon"
    />
  );
}