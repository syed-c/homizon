import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/business-bay/business-central'] || {
  title: 'Carpet Cleaning in Business Central - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Business Central. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningBusinessCentralPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="business-bay"
      areaName="Business Bay"
      subarea="business-central"
      subareaName="Business Central"
    />
  );
}