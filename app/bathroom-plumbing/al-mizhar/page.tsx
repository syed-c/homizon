import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-mizhar'] || {
  title: 'Bathroom Plumbing in Al Mizhar - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Mizhar. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlMizharPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-mizhar"
      areaName="Al Mizhar"
    />
  );
}