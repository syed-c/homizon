import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/emaar-beachfront'] || {
  title: 'Bathroom Deep Cleaning in Emaar Beachfront - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Emaar Beachfront. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningEmaarBeachfrontPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="emaar-beachfront"
      areaName="Emaar Beachfront"
    />
  );
}