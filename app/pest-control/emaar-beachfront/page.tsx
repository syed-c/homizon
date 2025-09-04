import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/pest-control/emaar-beachfront'] || {
  title: 'Pest Control in Emaar Beachfront - Professional Services | HOMIZON',
  description: 'Professional pest control services in Emaar Beachfront. Verified providers, competitive rates, same-day service available.',
};

export default async function PestControlEmaarBeachfrontPage() {
  return (
    <ServiceAreaPageContent 
      service="pest-control"
      serviceName="Pest Control"
      area="emaar-beachfront"
      areaName="Emaar Beachfront"
    />
  );
}