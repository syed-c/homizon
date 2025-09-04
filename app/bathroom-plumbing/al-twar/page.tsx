import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-twar'] || {
  title: 'Bathroom Plumbing in Al Twar - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Twar. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlTwarPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-twar"
      areaName="Al Twar"
    />
  );
}