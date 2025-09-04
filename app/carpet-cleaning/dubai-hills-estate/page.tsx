import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-hills-estate'] || {
  title: 'Carpet Cleaning in Dubai Hills Estate - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Dubai Hills Estate. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningDubaiHillsEstatePage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-hills-estate"
      areaName="Dubai Hills Estate"
    />
  );
}