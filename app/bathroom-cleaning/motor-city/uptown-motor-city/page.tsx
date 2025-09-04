import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/motor-city/uptown-motor-city'] || {
  title: 'Bathroom Deep Cleaning in Uptown Motor City - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Uptown Motor City. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningUptownMotorCityPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="motor-city"
      areaName="Motor City"
      subarea="uptown-motor-city"
      subareaName="Uptown Motor City"
    />
  );
}