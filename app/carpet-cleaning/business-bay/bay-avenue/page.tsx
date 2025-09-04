import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/business-bay/bay-avenue'] || {
  title: 'Carpet Cleaning in Bay Avenue - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Bay Avenue. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningBayAvenuePage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="business-bay"
      areaName="Business Bay"
      subarea="bay-avenue"
      subareaName="Bay Avenue"
    />
  );
}