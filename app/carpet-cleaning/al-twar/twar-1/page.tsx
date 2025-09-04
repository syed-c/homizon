import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-twar/twar-1'] || {
  title: 'Carpet Cleaning in Twar 1 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Twar 1. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningTwar1Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-twar"
      areaName="Al Twar"
      subarea="twar-1"
      subareaName="Twar 1"
    />
  );
}