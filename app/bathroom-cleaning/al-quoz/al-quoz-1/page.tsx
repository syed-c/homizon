import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-quoz/al-quoz-1'] || {
  title: 'Bathroom Deep Cleaning in Al Quoz 1 - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Al Quoz 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningAlQuoz1Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-quoz"
      areaName="Al Quoz"
      subarea="al-quoz-1"
      subareaName="Al Quoz 1"
    />
  );
}