import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-warqa/warqa-1'] || {
  title: 'Bathroom Plumbing in Warqa 1 - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Warqa 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingWarqa1Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-warqa"
      areaName="Al Warqa"
      subarea="warqa-1"
      subareaName="Warqa 1"
    />
  );
}