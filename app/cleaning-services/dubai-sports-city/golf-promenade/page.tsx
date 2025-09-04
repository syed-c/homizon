import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-sports-city/golf-promenade'] || {
  title: 'Cleaning Services in Golf Promenade - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Golf Promenade. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesGolfPromenadePage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="golf-promenade"
      subareaName="Golf Promenade"
    />
  );
}