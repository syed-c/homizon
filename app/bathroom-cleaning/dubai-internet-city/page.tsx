import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-internet-city'] || {
  title: 'Bathroom Deep Cleaning in Dubai Internet City - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Dubai Internet City. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningDubaiInternetCityPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-internet-city"
      areaName="Dubai Internet City"
    />
  );
}