import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-sports-city/sports-city-central'] || {
  title: 'Carpet Cleaning in Sports City Central - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Sports City Central. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningSportsCityCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
      subarea="sports-city-central"
      subareaName="Sports City Central"
    />
  );
}