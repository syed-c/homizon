import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-production-city'] || {
  title: 'Carpet Cleaning in Dubai Production City - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Dubai Production City. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningDubaiProductionCityPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-production-city"
      areaName="Dubai Production City"
    />
  );
}