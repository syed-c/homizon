import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-media-city'] || {
  title: 'Cleaning Services in Dubai Media City - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Dubai Media City. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesDubaiMediaCityPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-media-city"
      areaName="Dubai Media City"
    />
  );
}