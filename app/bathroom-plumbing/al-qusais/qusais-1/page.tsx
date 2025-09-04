import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-qusais/qusais-1'] || {
  title: 'Bathroom Plumbing in Qusais 1 - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Qusais 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingQusais1Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-qusais"
      areaName="Al Qusais"
      subarea="qusais-1"
      subareaName="Qusais 1"
    />
  );
}