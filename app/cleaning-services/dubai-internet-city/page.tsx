import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-internet-city'] || {
  title: 'Cleaning Services in Dubai Internet City - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Dubai Internet City. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesDubaiInternetCityPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-internet-city"
      areaName="Dubai Internet City"
    />
  );
}