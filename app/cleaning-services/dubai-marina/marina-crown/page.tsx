import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-marina/marina-crown'] || {
  title: 'Cleaning Services in Marina Crown - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Marina Crown. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesMarinaCrownPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-crown"
      subareaName="Marina Crown"
    />
  );
}