import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/dubai-sports-city/sports-city-central'] || {
  title: 'Pest Control in Sports City Central - Professional Services | HOMIZON',
  description: 'Professional pest control services in Sports City Central. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlSportsCityCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="sports-city-central"
      subareaName="Sports City Central"
    />
  );
}