import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-nahda/nahda-1'] || {
  title: 'Carpet Cleaning in Nahda 1 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Nahda 1. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningNahda1Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-nahda"
      areaName="Al Nahda"
      subarea="nahda-1"
      subareaName="Nahda 1"
    />
  );
}