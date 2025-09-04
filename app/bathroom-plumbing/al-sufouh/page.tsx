import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-sufouh'] || {
  title: 'Bathroom Plumbing in Al Sufouh - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Sufouh. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlSufouhPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-sufouh"
      areaName="Al Sufouh"
    />
  );
}