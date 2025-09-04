import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-land/remraam'] || {
  title: 'Bathroom Plumbing in Remraam - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Remraam. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingRemraamPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-land"
      areaName="Dubai Land"
      subarea="remraam"
      subareaName="Remraam"
    />
  );
}