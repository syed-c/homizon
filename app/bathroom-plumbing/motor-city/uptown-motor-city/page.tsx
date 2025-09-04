import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/motor-city/uptown-motor-city'] || {
  title: 'Bathroom Plumbing in Uptown Motor City - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Uptown Motor City. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingUptownMotorCityPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="motor-city"
      areaName="Motor City"
      subarea="uptown-motor-city"
      subareaName="Uptown Motor City"
    />
  );
}