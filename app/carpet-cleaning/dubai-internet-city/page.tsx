import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/dubai-internet-city'] || {
  title: 'Carpet Cleaning in Dubai Internet City - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Dubai Internet City. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningDubaiInternetCityPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="dubai-internet-city"
      areaName="Dubai Internet City"
    />
  );
}