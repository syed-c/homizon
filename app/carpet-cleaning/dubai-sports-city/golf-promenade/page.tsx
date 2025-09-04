import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-sports-city/golf-promenade'] || {
  title: 'Carpet Cleaning in Golf Promenade - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Golf Promenade. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningGolfPromenadePage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="golf-promenade"
      subareaName="Golf Promenade"
    />
  );
}