import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-barsha/al-barsha-south'] || {
  title: 'Bathroom Plumbing in Al Barsha South - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Barsha South. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlBarshaSouthPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-barsha"
      areaName="Al Barsha"
      subarea="al-barsha-south"
      subareaName="Al Barsha South"
    />
  );
}