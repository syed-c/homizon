import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/dubai-sports-city/golf-promenade'] || {
  title: 'AC Servicing in Golf Promenade - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Golf Promenade. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingGolfPromenadePage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="golf-promenade"
      subareaName="Golf Promenade"
    />
  );
}