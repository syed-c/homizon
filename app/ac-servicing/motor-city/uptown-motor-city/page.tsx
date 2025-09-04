import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/motor-city/uptown-motor-city'] || {
  title: 'AC Servicing in Uptown Motor City - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Uptown Motor City. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingUptownMotorCityPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="motor-city"
      areaName="Motor City"
      subarea="uptown-motor-city"
      subareaName="Uptown Motor City"
    />
  );
}