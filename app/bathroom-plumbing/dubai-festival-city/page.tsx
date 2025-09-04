import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-festival-city'] || {
  title: 'Bathroom Plumbing in Dubai Festival City - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Dubai Festival City. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingDubaiFestivalCityPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-festival-city"
      areaName="Dubai Festival City"
    />
  );
}