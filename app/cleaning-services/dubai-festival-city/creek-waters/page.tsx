import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-festival-city/creek-waters'] || {
  title: 'Cleaning Services in Creek Waters - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Creek Waters. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesCreekWatersPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
      subarea="creek-waters"
      subareaName="Creek Waters"
    />
  );
}