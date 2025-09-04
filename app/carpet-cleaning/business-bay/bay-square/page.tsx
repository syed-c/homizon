import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/business-bay/bay-square'] || {
  title: 'Carpet Cleaning in Bay Square - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Bay Square. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningBaySquarePage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="business-bay"
      areaName="Business Bay"
      subarea="bay-square"
      subareaName="Bay Square"
    />
  );
}