import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/bur-dubai/meena-bazaar'] || {
  title: 'Carpet Cleaning in Meena Bazaar - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Meena Bazaar. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningMeenaBazaarPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="meena-bazaar"
      subareaName="Meena Bazaar"
    />
  );
}