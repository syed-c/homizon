import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/nad-al-sheba'] || {
  title: 'Bathroom Plumbing in Nad Al Sheba - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Nad Al Sheba. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingNadAlShebaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="nad-al-sheba"
      areaName="Nad Al Sheba"
    />
  );
}