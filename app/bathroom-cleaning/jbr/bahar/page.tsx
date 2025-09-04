import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/jbr/bahar'] || {
  title: 'Bathroom Deep Cleaning in Bahar - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Bahar. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningBaharPage() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="jbr"
      areaName="JBR"
      subarea="bahar"
      subareaName="Bahar"
    />
  );
}