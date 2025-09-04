import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-internet-city'] || {
  title: 'Bathroom Plumbing in Dubai Internet City - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Dubai Internet City. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingDubaiInternetCityPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-internet-city"
      areaName="Dubai Internet City"
    />
  );
}