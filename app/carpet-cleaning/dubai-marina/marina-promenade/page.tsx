import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-marina/marina-promenade'] || {
  title: 'Carpet Cleaning in Marina Promenade - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Marina Promenade. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningMarinaPromenadePage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-promenade"
      subareaName="Marina Promenade"
    />
  );
}