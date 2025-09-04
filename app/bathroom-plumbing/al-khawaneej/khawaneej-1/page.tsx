import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-khawaneej/khawaneej-1'] || {
  title: 'Bathroom Plumbing in Khawaneej 1 - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Khawaneej 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingKhawaneej1Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-khawaneej"
      areaName="Al Khawaneej"
      subarea="khawaneej-1"
      subareaName="Khawaneej 1"
    />
  );
}