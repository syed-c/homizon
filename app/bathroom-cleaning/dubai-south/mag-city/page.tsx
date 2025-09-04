import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-south/mag-city'] || {
  title: 'Bathroom Deep Cleaning in MAG City - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in MAG City. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningMAGCityPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-south"
      areaName="Dubai South"
      subarea="mag-city"
      subareaName="MAG City"
    />
  );
}