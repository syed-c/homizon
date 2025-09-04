import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-sports-city/golf-horizon'] || {
  title: 'AC Servicing in Golf Horizon - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Golf Horizon. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingGolfHorizonPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="golf-horizon"
      subareaName="Golf Horizon"
    />
  );
}