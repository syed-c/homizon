import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-marina/marina-walk'] || {
  title: 'Cleaning Services in Marina Walk - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Marina Walk. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesMarinaWalkPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-walk"
      subareaName="Marina Walk"
    />
  );
}