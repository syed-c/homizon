import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-media-city'] || {
  title: 'Bathroom Plumbing in Dubai Media City - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Dubai Media City. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingDubaiMediaCityPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-media-city"
      areaName="Dubai Media City"
    />
  );
}