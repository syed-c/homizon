import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-khawaneej/khawaneej-1'] || {
  title: 'Bathroom Deep Cleaning in Khawaneej 1 - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Khawaneej 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningKhawaneej1Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-khawaneej"
      areaName="Al Khawaneej"
      subarea="khawaneej-1"
      subareaName="Khawaneej 1"
    />
  );
}