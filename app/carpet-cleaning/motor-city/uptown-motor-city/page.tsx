import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/motor-city/uptown-motor-city'] || {
  title: 'Carpet Cleaning in Uptown Motor City - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Uptown Motor City. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningUptownMotorCityPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="motor-city"
      areaName="Motor City"
      subarea="uptown-motor-city"
      subareaName="Uptown Motor City"
    />
  );
}