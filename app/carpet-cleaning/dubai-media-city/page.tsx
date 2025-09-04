import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-media-city'] || {
  title: 'Carpet Cleaning in Dubai Media City - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Dubai Media City. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningDubaiMediaCityPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-media-city"
      areaName="Dubai Media City"
    />
  );
}