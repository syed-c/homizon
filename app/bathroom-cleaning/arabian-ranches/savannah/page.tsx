import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/arabian-ranches/savannah'] || {
  title: 'Bathroom Deep Cleaning in Savannah - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Savannah. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningSavannahPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="savannah"
      subareaName="Savannah"
    />
  );
}