import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-qusais'] || {
  title: 'Bathroom Plumbing in Al Qusais - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Qusais. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlQusaisPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-qusais"
      areaName="Al Qusais"
    />
  );
}