import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-plumbing/dubai-south/golf-links'] || {
  title: 'Bathroom Plumbing in Golf Links - Professional Services | HOMIZON',
  description: 'Professional bathroom plumbing services in Golf Links. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomPlumbingGolfLinksPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-plumbing"
      serviceName="Bathroom Plumbing"
      area="dubai-south"
      areaName="Dubai South"
      subarea="golf-links"
      subareaName="Golf Links"
    />
  );
}