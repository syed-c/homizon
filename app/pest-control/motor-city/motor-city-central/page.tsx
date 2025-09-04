import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/motor-city/motor-city-central'] || {
  title: 'Pest Control in Motor City Central - Professional Services | HOMIZON',
  description: 'Professional pest control services in Motor City Central. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlMotorCityCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="motor-city"
      areaName="Motor City"
      subarea="motor-city-central"
      subareaName="Motor City Central"
    />
  );
}