import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-khawaneej/khawaneej-1'] || {
  title: 'Carpet Cleaning in Khawaneej 1 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Khawaneej 1. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningKhawaneej1Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-khawaneej"
      areaName="Al Khawaneej"
      subarea="khawaneej-1"
      subareaName="Khawaneej 1"
    />
  );
}