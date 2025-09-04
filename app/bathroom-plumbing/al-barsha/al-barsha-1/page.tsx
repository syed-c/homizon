import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-barsha/al-barsha-1'] || {
  title: 'Bathroom Plumbing in Al Barsha 1 - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Barsha 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlBarsha1Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-1"
      subareaName="Al Barsha 1"
    />
  );
}