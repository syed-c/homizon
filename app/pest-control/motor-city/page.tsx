import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/motor-city'] || {
  title: 'Pest Control in Motor City - Professional Services | HOMIZON',
  description: 'Professional pest control services in Motor City. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlMotorCityPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="motor-city"
      areaName="Motor City"
    />
  );
}