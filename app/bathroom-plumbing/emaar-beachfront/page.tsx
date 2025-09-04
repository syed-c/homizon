import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/emaar-beachfront'] || {
  title: 'Bathroom Plumbing in Emaar Beachfront - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Emaar Beachfront. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingEmaarBeachfrontPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="emaar-beachfront"
      areaName="Emaar Beachfront"
    />
  );
}