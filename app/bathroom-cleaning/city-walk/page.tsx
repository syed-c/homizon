import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/city-walk'] || {
  title: 'Bathroom Deep Cleaning in City Walk - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in City Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningCityWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="city-walk"
      areaName="City Walk"
    />
  );
}