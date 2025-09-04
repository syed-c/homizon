import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/ac-servicing/bur-dubai/meena-bazaar'] || {
  title: 'AC Servicing in Meena Bazaar - Professional Services | HOMIZON',
  description: 'Professional ac servicing services in Meena Bazaar. Verified providers, competitive rates, same-day service available.',
};

export default async function ACServicingMeenaBazaarPage() {
  return (
    <ServiceAreaPageContent 
      service="ac-servicing"
      serviceName="AC Servicing"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="meena-bazaar"
      subareaName="Meena Bazaar"
    />
  );
}