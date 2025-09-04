import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/international-city'] || {
  title: 'Carpet Cleaning in International City - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in International City. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningInternationalCityPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="international-city"
      areaName="International City"
    />
  );
}