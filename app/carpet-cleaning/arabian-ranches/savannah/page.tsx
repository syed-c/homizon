import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/arabian-ranches/savannah'] || {
  title: 'Carpet Cleaning in Savannah - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Savannah. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningSavannahPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="savannah"
      subareaName="Savannah"
    />
  );
}