import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/city-walk'] || {
  title: 'Bathroom Plumbing in City Walk - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in City Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingCityWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="city-walk"
      areaName="City Walk"
    />
  );
}