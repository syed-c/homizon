import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-sports-city'] || {
  title: 'Cleaning Services in Dubai Sports City - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in Dubai Sports City. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesDubaiSportsCityPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
    />
  );
}