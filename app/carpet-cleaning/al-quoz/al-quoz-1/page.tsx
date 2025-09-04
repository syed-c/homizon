import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-quoz/al-quoz-1'] || {
  title: 'Carpet Cleaning in Al Quoz 1 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Al Quoz 1. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningAlQuoz1Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-quoz"
      areaName="Al Quoz"
      subarea="al-quoz-1"
      subareaName="Al Quoz 1"
    />
  );
}