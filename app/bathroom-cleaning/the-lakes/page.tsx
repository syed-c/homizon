import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/the-lakes'] || {
  title: 'Bathroom Deep Cleaning in The Lakes - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in The Lakes. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningTheLakesPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="the-lakes"
      areaName="The Lakes"
    />
  );
}