import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-knowledge-park'] || {
  title: 'Carpet Cleaning in Dubai Knowledge Park - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Dubai Knowledge Park. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningDubaiKnowledgeParkPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-knowledge-park"
      areaName="Dubai Knowledge Park"
    />
  );
}