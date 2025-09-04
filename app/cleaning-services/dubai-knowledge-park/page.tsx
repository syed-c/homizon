import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-knowledge-park'] || {
  title: 'Cleaning Services in Dubai Knowledge Park - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Dubai Knowledge Park. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesDubaiKnowledgeParkPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-knowledge-park"
      areaName="Dubai Knowledge Park"
    />
  );
}