import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/motor-city/motor-city-central'] || {
  title: 'AC Servicing in Motor City Central - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Motor City Central. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingMotorCityCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="motor-city"
      areaName="Motor City"
      subarea="motor-city-central"
      subareaName="Motor City Central"
    />
  );
}