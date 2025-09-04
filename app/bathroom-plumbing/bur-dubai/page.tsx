import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/bur-dubai'] || {
  title: 'Bathroom Plumbing in Bur Dubai - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Bur Dubai. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingBurDubaiPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="bur-dubai"
      areaName="Bur Dubai"
    />
  );
}