import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/bur-dubai/meena-bazaar'] || {
  title: 'Bathroom Plumbing in Meena Bazaar - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Meena Bazaar. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingMeenaBazaarPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="meena-bazaar"
      subareaName="Meena Bazaar"
    />
  );
}