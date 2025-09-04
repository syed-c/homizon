import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-sports-city/sports-city-central'] || {
  title: 'Bathroom Deep Cleaning in Sports City Central - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Sports City Central. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningSportsCityCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="sports-city-central"
      subareaName="Sports City Central"
    />
  );
}