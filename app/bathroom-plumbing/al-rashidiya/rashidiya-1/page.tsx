import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-rashidiya/rashidiya-1'] || {
  title: 'Bathroom Plumbing in Rashidiya 1 - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Rashidiya 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingRashidiya1Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-rashidiya"
      areaName="Al Rashidiya"
      subarea="rashidiya-1"
      subareaName="Rashidiya 1"
    />
  );
}