import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-barsha/al-barsha-2'] || {
  title: 'Bathroom Plumbing in Al Barsha 2 - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Barsha 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlBarsha2Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-2"
      subareaName="Al Barsha 2"
    />
  );
}