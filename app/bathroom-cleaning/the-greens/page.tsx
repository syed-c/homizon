import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/the-greens'] || {
  title: 'Bathroom Deep Cleaning in The Greens - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in The Greens. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningTheGreensPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="the-greens"
      areaName="The Greens"
    />
  );
}