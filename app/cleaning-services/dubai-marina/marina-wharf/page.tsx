import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-marina/marina-wharf'] || {
  title: 'Cleaning Services in Marina Wharf - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Marina Wharf. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesMarinaWharfPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-marina"
      areaName="Dubai Marina"
      subarea="marina-wharf"
      subareaName="Marina Wharf"
    />
  );
}