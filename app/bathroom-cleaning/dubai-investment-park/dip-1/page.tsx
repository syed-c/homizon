import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/dubai-investment-park/dip-1'] || {
  title: 'Bathroom Deep Cleaning in DIP 1 - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in DIP 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningDIP1Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="dubai-investment-park"
      areaName="Dubai Investment Park"
      subarea="dip-1"
      subareaName="DIP 1"
    />
  );
}