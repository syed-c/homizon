import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/emaar-beachfront'] || {
  title: 'Cleaning Services in Emaar Beachfront - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Emaar Beachfront. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesEmaarBeachfrontPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="emaar-beachfront"
      areaName="Emaar Beachfront"
    />
  );
}