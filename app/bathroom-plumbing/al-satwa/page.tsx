import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-satwa'] || {
  title: 'Bathroom Plumbing in Al Satwa - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Satwa. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlSatwaPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-satwa"
      areaName="Al Satwa"
    />
  );
}