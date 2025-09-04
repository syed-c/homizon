import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-festival-city'] || {
  title: 'Bathroom Deep Cleaning in Dubai Festival City - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Dubai Festival City. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningDubaiFestivalCityPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
    />
  );
}