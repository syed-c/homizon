import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/motor-city/motor-city-central'] || {
  title: 'Bathroom Deep Cleaning in Motor City Central - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Motor City Central. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningMotorCityCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="motor-city"
      areaName="Motor City"
      subarea="motor-city-central"
      subareaName="Motor City Central"
    />
  );
}