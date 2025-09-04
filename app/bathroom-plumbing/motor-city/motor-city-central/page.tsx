import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/motor-city/motor-city-central'] || {
  title: 'Bathroom Plumbing in Motor City Central - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Motor City Central. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingMotorCityCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="motor-city"
      areaName="Motor City"
      subarea="motor-city-central"
      subareaName="Motor City Central"
    />
  );
}