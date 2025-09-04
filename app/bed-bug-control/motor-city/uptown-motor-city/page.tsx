import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bed-bug-control/motor-city/uptown-motor-city'] || {
  title: 'Bed Bug Treatment in Uptown Motor City - Professional Services | HOMIZON',
  description: 'Professional bed bug treatment services in Uptown Motor City. Verified providers, competitive rates, same-day service available.',
};

export default async function BedBugTreatmentUptownMotorCityPage() {
  return (
    <ServiceAreaPageContent 
      service="bed-bug-control"
      serviceName="Bed Bug Treatment"
      area="motor-city"
      areaName="Motor City"
      subarea="uptown-motor-city"
      subareaName="Uptown Motor City"
    />
  );
}