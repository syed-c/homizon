import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/bur-dubai/al-fahidi'] || {
  title: 'Bathroom Plumbing in Al Fahidi - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Al Fahidi. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingAlFahidiPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="bur-dubai"
      areaName="Bur Dubai"
      subarea="al-fahidi"
      subareaName="Al Fahidi"
    />
  );
}