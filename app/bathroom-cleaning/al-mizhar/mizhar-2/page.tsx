import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-mizhar/mizhar-2'] || {
  title: 'Bathroom Deep Cleaning in Mizhar 2 - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Mizhar 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningMizhar2Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-mizhar"
      areaName="Al Mizhar"
      subarea="mizhar-2"
      subareaName="Mizhar 2"
    />
  );
}