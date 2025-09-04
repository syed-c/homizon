import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/city-walk'] || {
  title: 'AC Servicing in City Walk - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in City Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingCityWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="city-walk"
      areaName="City Walk"
    />
  );
}