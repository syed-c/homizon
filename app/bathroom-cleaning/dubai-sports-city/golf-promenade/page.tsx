import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-sports-city/golf-promenade'] || {
  title: 'Bathroom Deep Cleaning in Golf Promenade - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Golf Promenade. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningGolfPromenadePage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="golf-promenade"
      subareaName="Golf Promenade"
    />
  );
}