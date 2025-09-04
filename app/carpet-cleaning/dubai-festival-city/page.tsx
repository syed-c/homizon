import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-festival-city'] || {
  title: 'Carpet Cleaning in Dubai Festival City - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Dubai Festival City. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningDubaiFestivalCityPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
    />
  );
}