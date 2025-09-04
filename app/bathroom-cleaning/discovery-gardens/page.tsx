import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/discovery-gardens'] || {
  title: 'Bathroom Deep Cleaning in Discovery Gardens - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Discovery Gardens. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningDiscoveryGardensPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="discovery-gardens"
      areaName="Discovery Gardens"
    />
  );
}