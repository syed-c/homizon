import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/al-khawaneej/khawaneej-2'] || {
  title: 'Carpet Cleaning in Khawaneej 2 - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Khawaneej 2. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningKhawaneej2Page() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="al-khawaneej"
      areaName="Al Khawaneej"
      subarea="khawaneej-2"
      subareaName="Khawaneej 2"
    />
  );
}