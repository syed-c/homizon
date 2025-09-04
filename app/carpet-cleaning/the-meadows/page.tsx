import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/the-meadows'] || {
  title: 'Carpet Cleaning in The Meadows - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in The Meadows. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningTheMeadowsPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="the-meadows"
      areaName="The Meadows"
    />
  );
}