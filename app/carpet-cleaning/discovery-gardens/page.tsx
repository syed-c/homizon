import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/discovery-gardens'] || {
  title: 'Carpet Cleaning in Discovery Gardens - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Discovery Gardens. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningDiscoveryGardensPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="discovery-gardens"
      areaName="Discovery Gardens"
    />
  );
}