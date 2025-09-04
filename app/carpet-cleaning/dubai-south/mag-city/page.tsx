import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-south/mag-city'] || {
  title: 'Carpet Cleaning in MAG City - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in MAG City. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningMAGCityPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-south"
      areaName="Dubai South"
      subarea="mag-city"
      subareaName="MAG City"
    />
  );
}