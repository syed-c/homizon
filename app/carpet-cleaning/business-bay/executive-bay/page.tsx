import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/business-bay/executive-bay'] || {
  title: 'Carpet Cleaning in Executive Bay - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Executive Bay. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningExecutiveBayPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="business-bay"
      areaName="Business Bay"
      subarea="executive-bay"
      subareaName="Executive Bay"
    />
  );
}