import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/emaar-beachfront'] || {
  title: 'Carpet Cleaning in Emaar Beachfront - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Emaar Beachfront. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningEmaarBeachfrontPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="emaar-beachfront"
      areaName="Emaar Beachfront"
    />
  );
}