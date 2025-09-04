import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-marina/marina-gate'] || {
  title: 'Carpet Cleaning in Marina Gate - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Marina Gate. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningMarinaGatePage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-gate"
      subareaName="Marina Gate"
    />
  );
}