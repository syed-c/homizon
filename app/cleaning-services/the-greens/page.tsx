import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/the-greens'] || {
  title: 'Cleaning Services in The Greens - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in The Greens. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesTheGreensPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="the-greens"
      areaName="The Greens"
    />
  );
}