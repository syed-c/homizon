import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/emirates-hills'] || {
  title: 'Bathroom Deep Cleaning in Emirates Hills - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Emirates Hills. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningEmiratesHillsPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="emirates-hills"
      areaName="Emirates Hills"
    />
  );
}