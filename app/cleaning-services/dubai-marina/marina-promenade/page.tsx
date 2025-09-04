import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-marina/marina-promenade'] || {
  title: 'Cleaning Services in Marina Promenade - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Marina Promenade. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesMarinaPromenadePage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-promenade"
      subareaName="Marina Promenade"
    />
  );
}