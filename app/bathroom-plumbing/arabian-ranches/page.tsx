import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/arabian-ranches'] || {
  title: 'Bathroom Plumbing in Arabian Ranches - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Arabian Ranches. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingArabianRanchesPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="arabian-ranches"
      areaName="Arabian Ranches"
    />
  );
}