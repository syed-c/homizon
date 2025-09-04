import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/motor-city'] || {
  title: 'Carpet Cleaning in Motor City - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Motor City. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningMotorCityPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="motor-city"
      areaName="Motor City"
    />
  );
}