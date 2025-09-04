import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/jvc'] || {
  title: 'Bathroom Deep Cleaning in JVC - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in JVC. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningJVCPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="jvc"
      areaName="JVC"
    />
  );
}