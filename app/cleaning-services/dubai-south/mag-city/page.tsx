import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/cleaning-services/dubai-south/mag-city'] || {
  title: 'Cleaning Services in MAG City - Professional Services | HOMIZON',
  description: 'Professional cleaning services services in MAG City. Verified providers, competitive rates, same-day service available.',
};

export default async function CleaningServicesMAGCityPage() {
  return (
    <ServiceAreaPageContent 
      service="cleaning-services"
      serviceName="Cleaning Services"
      area="dubai-south"
      areaName="Dubai South"
      subarea="mag-city"
      subareaName="MAG City"
    />
  );
}