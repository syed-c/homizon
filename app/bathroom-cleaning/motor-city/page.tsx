import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/motor-city'] || {
  title: 'Bathroom Deep Cleaning in Motor City - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Motor City. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningMotorCityPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="motor-city"
      areaName="Motor City"
    />
  );
}