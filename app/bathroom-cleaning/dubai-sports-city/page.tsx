import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-sports-city'] || {
  title: 'Bathroom Deep Cleaning in Dubai Sports City - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Dubai Sports City. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningDubaiSportsCityPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-sports-city"
      areaName="Dubai Sports City"
    />
  );
}