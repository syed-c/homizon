import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/arabian-ranches'] || {
  title: 'Bathroom Deep Cleaning in Arabian Ranches - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Arabian Ranches. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningArabianRanchesPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="arabian-ranches"
      areaName="Arabian Ranches"
    />
  );
}