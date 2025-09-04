import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-rashidiya/rashidiya-2'] || {
  title: 'Bathroom Deep Cleaning in Rashidiya 2 - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Rashidiya 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningRashidiya2Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-rashidiya"
      areaName="Al Rashidiya"
      subarea="rashidiya-2"
      subareaName="Rashidiya 2"
    />
  );
}