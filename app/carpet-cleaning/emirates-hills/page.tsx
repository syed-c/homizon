import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/carpet-cleaning/emirates-hills'] || {
  title: 'Carpet Cleaning in Emirates Hills - Professional Services | HOMIZON',
  description: 'Professional carpet cleaning services in Emirates Hills. Verified providers, competitive rates, same-day service available.',
};

export default async function CarpetCleaningEmiratesHillsPage() {
  return (
    <ServiceAreaPageContent 
      service="carpet-cleaning"
      serviceName="Carpet Cleaning"
      area="emirates-hills"
      areaName="Emirates Hills"
    />
  );
}