import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-marina/marina-crown'] || {
  title: 'Carpet Cleaning in Marina Crown - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Marina Crown. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningMarinaCrownPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-crown"
      subareaName="Marina Crown"
    />
  );
}