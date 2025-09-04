import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageClient from './service-area-page-client';

export const metadata: Metadata = siteMetadata['/pest-control/dubai-festival-city/al-badia-residences'] || {
  title: 'Pest Control in Al Badia Residences, Dubai Festival City - Professional Services | HOMIZON',
  description: 'Professional pest control services in Al Badia Residences, Dubai Festival City. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlDubaiFestivalCityAlBadiaResidencesPage() {
  return (
    <ServiceAreaPageClient 
      service="pest-control"
      serviceName="Pest Control"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subArea="al-badia-residences"
      subAreaName="Al Badia Residences"
    />
  );
}