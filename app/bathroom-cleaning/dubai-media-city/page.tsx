import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-media-city'] || {
  title: 'Bathroom Deep Cleaning in Dubai Media City - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Dubai Media City. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningDubaiMediaCityPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-media-city"
      areaName="Dubai Media City"
    />
  );
}