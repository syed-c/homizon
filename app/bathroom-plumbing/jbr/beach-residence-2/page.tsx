import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/jbr/beach-residence-2'] || {
  title: 'Bathroom Plumbing in Beach Residence 2 - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Beach Residence 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingBeachResidence2Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="jbr"
      areaName="JBR"
      subarea="beach-residence-2"
      subareaName="Beach Residence 2"
    />
  );
}