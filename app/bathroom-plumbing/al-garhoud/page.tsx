import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-garhoud'] || {
  title: 'Bathroom Plumbing in Al Garhoud - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Garhoud. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlGarhoudPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-garhoud"
      areaName="Al Garhoud"
    />
  );
}