import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-sports-city/sports-city-central'] || {
  title: 'Cleaning Services in Sports City Central - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Sports City Central. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesSportsCityCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="sports-city-central"
      subareaName="Sports City Central"
    />
  );
}