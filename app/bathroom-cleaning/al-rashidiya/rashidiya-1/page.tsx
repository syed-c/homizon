import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-rashidiya/rashidiya-1'] || {
  title: 'Bathroom Deep Cleaning in Rashidiya 1 - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Rashidiya 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningRashidiya1Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-rashidiya"
      areaName="Al Rashidiya"
      subarea="rashidiya-1"
      subareaName="Rashidiya 1"
    />
  );
}