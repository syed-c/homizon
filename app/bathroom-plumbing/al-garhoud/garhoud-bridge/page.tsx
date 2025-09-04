import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-garhoud/garhoud-bridge'] || {
  title: 'Bathroom Plumbing in Garhoud Bridge - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Garhoud Bridge. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingGarhoudBridgePage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-garhoud"
      areaName="Al Garhoud"
      subarea="garhoud-bridge"
      subareaName="Garhoud Bridge"
    />
  );
}