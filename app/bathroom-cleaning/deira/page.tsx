import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/deira'] || {
  title: 'Bathroom Deep Cleaning in Deira - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Deira. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningDeiraPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="deira"
      areaName="Deira"
    />
  );
}