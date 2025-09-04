import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-nahda/nahda-1'] || {
  title: 'Bathroom Deep Cleaning in Nahda 1 - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Nahda 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningNahda1Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-nahda"
      areaName="Al Nahda"
      subarea="nahda-1"
      subareaName="Nahda 1"
    />
  );
}