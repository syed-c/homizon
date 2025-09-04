import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/arabian-ranches/mirador'] || {
  title: 'Bathroom Deep Cleaning in Mirador - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Mirador. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningMiradorPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="arabian-ranches"
      areaName="Arabian Ranches"
      subarea="mirador"
      subareaName="Mirador"
    />
  );
}