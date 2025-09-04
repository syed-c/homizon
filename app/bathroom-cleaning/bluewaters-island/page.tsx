import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/bluewaters-island'] || {
  title: 'Bathroom Deep Cleaning in Bluewaters Island - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Bluewaters Island. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningBluewatersIslandPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="bluewaters-island"
      areaName="Bluewaters Island"
    />
  );
}