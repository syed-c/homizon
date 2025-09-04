import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/al-mizhar/mizhar-1'] || {
  title: 'Bathroom Deep Cleaning in Mizhar 1 - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Mizhar 1. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningMizhar1Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="al-mizhar"
      areaName="Al Mizhar"
      subarea="mizhar-1"
      subareaName="Mizhar 1"
    />
  );
}