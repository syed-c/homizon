import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/city-walk'] || {
  title: 'Carpet Cleaning in City Walk - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in City Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningCityWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="city-walk"
      areaName="City Walk"
    />
  );
}