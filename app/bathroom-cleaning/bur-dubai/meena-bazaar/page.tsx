import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/bur-dubai/meena-bazaar'] || {
  title: 'Bathroom Deep Cleaning in Meena Bazaar - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Meena Bazaar. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningMeenaBazaarPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="meena-bazaar"
      subareaName="Meena Bazaar"
    />
  );
}