import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ServiceAreaPageContent from '@/components/service-area-page-content';

export const metadata: Metadata = siteMetadata['/bathroom-cleaning/jbr/beach-residence-2'] || {
  title: 'Bathroom Deep Cleaning in Beach Residence 2 - Professional Services | HOMIZON',
  description: 'Professional bathroom deep cleaning services in Beach Residence 2. Verified providers, competitive rates, same-day service available.',
};

export default async function BathroomDeepCleaningBeachResidence2Page() {
  return (
    <ServiceAreaPageContent 
      service="bathroom-cleaning"
      serviceName="Bathroom Deep Cleaning"
      area="jbr"
      areaName="JBR"
      subarea="beach-residence-2"
      subareaName="Beach Residence 2"
    />
  );
}