import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-khawaneej/khawaneej-2'] || {
  title: 'Bathroom Deep Cleaning in Khawaneej 2 - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Khawaneej 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningKhawaneej2Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-khawaneej"
      areaName="Al Khawaneej"
      subarea="khawaneej-2"
      subareaName="Khawaneej 2"
    />
  );
}