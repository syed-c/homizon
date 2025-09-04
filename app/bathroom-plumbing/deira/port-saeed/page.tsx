import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/deira/port-saeed'] || {
  title: 'Bathroom Plumbing in Port Saeed - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Port Saeed. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingPortSaeedPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="deira"
      areaName="Deira"
      subarea="port-saeed"
      subareaName="Port Saeed"
    />
  );
}