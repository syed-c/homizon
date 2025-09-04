import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/jbr/bahar'] || {
  title: 'Bathroom Plumbing in Bahar - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Bahar. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingBaharPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="jbr"
      areaName="JBR"
      subarea="bahar"
      subareaName="Bahar"
    />
  );
}