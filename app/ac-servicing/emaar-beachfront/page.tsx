import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/emaar-beachfront'] || {
  title: 'AC Servicing in Emaar Beachfront - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Emaar Beachfront. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingEmaarBeachfrontPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="emaar-beachfront"
      areaName="Emaar Beachfront"
    />
  );
}