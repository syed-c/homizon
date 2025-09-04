import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-barari'] || {
  title: 'Bathroom Plumbing in Al Barari - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Barari. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlBarariPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-barari"
      areaName="Al Barari"
    />
  );
}