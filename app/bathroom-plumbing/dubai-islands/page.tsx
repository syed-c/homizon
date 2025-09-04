import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-islands'] || {
  title: 'Bathroom Plumbing in Dubai Islands - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Dubai Islands. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingDubaiIslandsPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-islands"
      areaName="Dubai Islands"
    />
  );
}