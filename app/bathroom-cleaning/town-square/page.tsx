import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/town-square'] || {
  title: 'Bathroom Deep Cleaning in Town Square - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Town Square. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningTownSquarePage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="town-square"
      areaName="Town Square"
    />
  );
}