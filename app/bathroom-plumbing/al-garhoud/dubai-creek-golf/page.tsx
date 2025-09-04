import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/al-garhoud/dubai-creek-golf'] || {
  title: 'Bathroom Plumbing in Dubai Creek Golf - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Dubai Creek Golf. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingDubaiCreekGolfPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="al-garhoud"
      areaName="Al Garhoud"
      subarea="dubai-creek-golf"
      subareaName="Dubai Creek Golf"
    />
  );
}