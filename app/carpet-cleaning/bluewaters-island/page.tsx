import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/bluewaters-island'] || {
  title: 'Carpet Cleaning in Bluewaters Island - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Bluewaters Island. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningBluewatersIslandPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="bluewaters-island"
      areaName="Bluewaters Island"
    />
  );
}