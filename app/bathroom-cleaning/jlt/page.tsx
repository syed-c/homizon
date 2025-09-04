import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/jlt'] || {
  title: 'Bathroom Deep Cleaning in JLT - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in JLT. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningJLTPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="jlt"
      areaName="JLT"
    />
  );
}