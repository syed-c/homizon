import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-festival-city/creek-waters'] || {
  title: 'Carpet Cleaning in Creek Waters - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Creek Waters. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningCreekWatersPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="creek-waters"
      subareaName="Creek Waters"
    />
  );
}