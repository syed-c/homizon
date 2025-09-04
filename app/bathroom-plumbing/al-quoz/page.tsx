import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-quoz'] || {
  title: 'Bathroom Plumbing in Al Quoz - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Quoz. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlQuozPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-quoz"
      areaName="Al Quoz"
    />
  );
}