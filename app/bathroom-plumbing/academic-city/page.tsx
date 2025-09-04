import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/academic-city'] || {
  title: 'Bathroom Plumbing in Academic City - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Academic City. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAcademicCityPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="academic-city"
      areaName="Academic City"
    />
  );
}